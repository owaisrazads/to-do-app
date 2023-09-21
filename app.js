// function addTask() {
//     var taskInput = document.getElementById("taskInput");
//     var taskList = document.getElementById("taskList");

//     if (taskInput.value !== "") {
//         var taskText = taskInput.value;

//         // Create new task element
//         var listItem = '<li>' + taskText +
//                        ' <button onclick="deleteTask(this)">Delete</button>' + 
//                        ' <button onclick="editTask(this)">Edit</button></li>';

//         // Add task to the list
//         taskList.innerHTML += listItem;

//         // Clear input field
//         taskInput.value = "";
//     }
// }

// function deleteTask(button) {
//     var listItem = button.parentNode;
//     var taskList = document.getElementById("taskList");
//     taskList.removeChild(listItem);
// }

// function editTask(button) {
//     var listItem = button.parentNode;
//     var taskText = listItem.firstChild.nodeValue;
//     var newText = prompt("Edit the task:", taskText);
//     if (newText !== null) {
//         listItem.firstChild.nodeValue = newText;
//     }
// }



const todoList = document.getElementById("todoList");

function addItem() {
    const inputField = document.getElementById("todoInput");
    const todoText = inputField.value.trim();
    
    if (todoText !== "") {
        const listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML = `
            <span>${todoText}</span>
            <button onclick="editItem(this)">Edit</button>
            <button onclick="deleteItem(this)">Delete</button>
        `;
        todoList.appendChild(listItem);
        inputField.value = "";
    }
}

function editItem(button) {
    const listItem = button.parentElement;
    const textSpan = listItem.querySelector("span");
    const editText = prompt("Edit item:", textSpan.textContent);
    
    if (editText !== null) {
        textSpan.textContent = editText;
    }
}

function deleteItem(button) {
    const listItem = button.parentElement;
    todoList.removeChild(listItem);
}