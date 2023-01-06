// CODE EXPLAINED channel

// Selected the Elements
const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

// Class names
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-check-thin';
const LINE_THROUGH = 'lineThrough';
   
// Variables
let LIST = [],  id = 1;

// Show today date
const options = { weekday: 'short', month:'short', day:'numeric', year:'numeric' }; // created thur, 15 Dec 2022
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-UK', options);

// add to do function
function addToDo(toDo, id, done, trash){

    if(trash) {return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : ''; 

    const item = `
     <li class="item">
        <i class="fa ${DONE} fa-circle-thin co" job="complete" id="${id}"></i>
        <p class="text ${LINE}">${toDo}</p>
        <i class="fa fa-trash-o de" job="complete"></i>
    </li>`;

    const position = 'beforeend';

    list.insertAdjacentHTML(position, item);
    
}

// add an item to the list using 'enter' key
document.addEventListener('keyup', function(event){
    if(event.keyCode == 13) {
        const toDo = input.value;

        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false,
            })

            id++
        }
        input.value  = ''
    }
});

// console.log(addToDo(LIST.push('Kahawa chungu', 5, true, false))); // Testing
// Complete to do

function completeTodo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector('.text')

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove to do
function removeTodo(element) {
    element.parentNode.parentNode.removeChid(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items created dynamicaly
list.addEventListener('click', function(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if( elementJob == 'complete' ) {
        completeTodo(element);
    } else if( elementJob == 'delete') {
        removeTodo(element);
    }
})