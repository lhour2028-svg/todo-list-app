let taskList = [
  { text: "Tidy Room", done: false },
  { text: "Brush Teeth", done: false }
];

let list = document.querySelector("#TaskList");

function renderTasks() {
  list.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    let newItem = document.createElement("li");
    newItem.textContent = taskList[i].text;
    
    
    if (taskList[i].done === true) {
   newItem.classList.add("done");
   } else {
    newItem.classList.remove("done");
   }
    
    list.appendChild(newItem);
    newItem.addEventListener("click", function() {
   if (taskList[i].done === false) {
    taskList[i].done = true;
} else if (taskList[i].done === true) {
    taskList[i].done = false;
}
 renderTasks();
});
  }
}

let Submit = document.querySelector("#SubmitBtn");
let taskInput = document.querySelector("#TaskInput");

Submit.addEventListener("click", function() {
  let typedTask = taskInput.value;
  taskList.push({ text: typedTask, done: false });
  renderTasks();
});

let Delete = document.querySelector("#ClearBtn");

Delete.addEventListener("click", function() {
  list.innerHTML = "";
});

