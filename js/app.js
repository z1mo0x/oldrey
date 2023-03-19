const mainEl = document.querySelector('.notes');
const button = document.querySelector('.note-add');
//1) CreateNote функция

//2) Кнопка и обработчик на добавление

function createNote(title, text) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
    <div class='note-header'>
    <p id='note-title'>${title}</p>
    <input id="note-title-input" class='hidden' value='${title}'>
        <div class='note-actions'>
            <button class='edit'><i class="fa-regular fa-pen-to-square"></i></button>
            <button class='delete'><i class="fa-regular fa-trash-can"></i></button>
        </div>
    </div>
    <p id='note-descr'>${text}</p>
    <textarea id="note-descr-input" class='hidden'>${text}</textarea>

    `

    const editBtn = noteEl.querySelector('.edit');
    const deleteBtn = noteEl.querySelector('.delete');
    const titleEL = noteEl.querySelector('#note-title');
    const descrEL = noteEl.querySelector('#note-descr');
    const descrInput = noteEl.querySelector('#note-descr-input');
    const titleInput = noteEl.querySelector('#note-title-input');
    editBtn.addEventListener('click', (e) => {
        titleEL.classList.toggle('hidden');
        descrEL.classList.toggle('hidden');
        titleInput.classList.toggle('hidden');
        descrInput.classList.toggle('hidden');
    })
    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove();
    })
    titleInput.addEventListener('input', (e) => {
        titleEL.textContent = e.target.value;
    });
    descrInput.addEventListener('input', (e) => {
        descrEL.textContent = e.target.value;
    });

    return noteEl;


}

button.addEventListener('click', (e) => {
    const el = createNote('Заголовок', 'Ваш текст');
    mainEl.appendChild(el);
})

mainEl.appendChild(createNote('Привет', 'Привет'));