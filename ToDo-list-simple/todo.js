
var todos = ["Buy new turtle", "jump on the bed"];
var input = prompt("What would you like to do?");

while (input !== "quit"){
    if(input === "list") {
       listoftodos();
       
    } else if(input === "new") {
        var newtodo = prompt("Enter new todo");
        todos.push(newtodo);
    } else if(input === "delete") {
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Deleted todo with index " + index);
    }
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");


function listoftodos() {
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
}

    

