const cronometro = document.getElementById('cronometro');

let seconds = parseInt(sessionStorage.getItem('seconds') || 0);

const updateCronometro = () => {
    cronometro.innerText = `Tempo trascorso: ${seconds} secondi`;
    sessionStorage.setItem('seconds', seconds);
    seconds++;
}

setInterval(updateCronometro, 1000);
updateCronometro();

const inputName = document.querySelector('input');
const addButton = document.getElementById('addName');
const delButton = document.getElementById('delName');
const nameList = document.getElementById('nameList');

addButton.addEventListener('click', addName);
delButton.addEventListener('click', delName);

function addName(event) {
    event.preventDefault();
    const name = inputName.value;
    localStorage.setItem(name, name);
    inputName.value = '';
    renderNameList();
}

function delName(event) {
    event.preventDefault();
    localStorage.removeItem(inputName.value);
    inputName.value = '';
    renderNameList();
}

function renderNameList() {
    nameList.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        li.textContent = key;
        nameList.appendChild(li);
    }
}

renderNameList();