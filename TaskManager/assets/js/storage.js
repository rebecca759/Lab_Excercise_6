// Add to LocalStorage function declaration 
function addToDatabase(newTask) {
    let listofTasks;
    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    } 
    else {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    listofTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listofTasks));
}

//Load task from local storage function declaration
function loadfromDB() {
    let listofTasks;

    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    }
    else {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return listofTasks; //return array
}


//clear from local Storage
function clearAllTasksfromDB() {
    localStorage.clear();
}

//remove from local storage function declaration
function removefromDB(taskItem) {
    //console.log(taskItem.textContent)

    let listofTasks;

    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    }
    else {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }

    listofTasks.forEach(function(task,index) {
        if (taskItem.textContent.trim() == task.trim()) {
            listofTasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(listofTasks));
}