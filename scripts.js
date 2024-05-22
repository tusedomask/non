// Функция для сохранения заметки
function saveNote() {
    const diaryText = document.getElementById('diary-text').value;
    const date = new Date().toISOString();

    if (diaryText) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ text: diaryText, date: date });
        localStorage.setItem('notes', JSON.stringify(notes));

        // Очистить текстовое поле
        document.getElementById('diary-text').value = '';
        displayNotes();
    }
}

// Функция для отображения заметок
function displayNotes() {
    const diaryEntries = document.getElementById('diary-entries');
    diaryEntries.innerHTML = '';

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.sort((a, b) => new Date(b.date) - new Date(a.date)); // Сортировка по дате

    notes.forEach(note => {
        const listItem = document.createElement('li');
        listItem.textContent = `${new Date(note.date).toLocaleDateString()} - ${note.text}`;
        diaryEntries.appendChild(listItem);
    });
}

// Привязка события к кнопке сохранения
document.getElementById('save-btn').addEventListener('click', saveNote);

// Отображение заметок при загрузке страницы
window.onload = displayNotes;
