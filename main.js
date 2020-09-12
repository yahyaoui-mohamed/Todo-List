let addBtn = document.querySelector(".add-btn");
let input = document.querySelector(".item-input");
let todoContent = document.querySelector(".todo-content");

input.oninput = function() {
  if (this.value !== "") {
    addBtn.removeAttribute("disabled");
  } else {
    addBtn.setAttribute("disabled", "");
  }
};

addBtn.onclick = function() {
  let mainDiv = document.createElement("div");
  mainDiv.className = "item-container";
  let span = document.createElement("span");
  let spanContent = document.createTextNode(input.value);
  span.appendChild(spanContent);
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  mainDiv.appendChild(span);
  mainDiv.appendChild(deleteBtn);
  let noItem = document.querySelector(".no-item");
  if (noItem) {
    noItem.remove();
  }
  todoContent.appendChild(mainDiv);
  input.value = "";
  this.setAttribute("disabled", "");
  deleteBtn.onclick = function() {
    this.parentNode.remove();
    if (todoContent.innerHTML.trim() === "") {
      let noItem = document.createElement("div");
      noItem.className = "no-item";
      noItem.innerHTML = "No Todo Item.";
      todoContent.appendChild(noItem);
    }
  };
  span.onclick = function() {
    this.classList.toggle("finished");
  };
};
