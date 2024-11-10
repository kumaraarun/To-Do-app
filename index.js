let toDoApp={
    tasks:[],
    addTask(task){
        this.tasks.push({text:task,completed:false});
        this.renderTasks();

    },
    toogleTask(input){
        this.tasks[index].completed=!this.tasks[index].completed;
        this.renderTasks();

    },
    removeCompletedTasks(){
        this.tasks=this.tasks.filter(task=>!task.completed);
        this.renderTasks();

    },
    renderTasks(){
        let taskList=document.getElementById('taskList');
        taskList.innerHTML='';
      this.tasks.forEach((task,index)=>{
        const li= document.createElement('li');
        li.textContent=task.text;
        li.onclick = ()=> this.toogleTask(index);

        if(task.completed){
            li.classList.add('completed');
        }
        taskList.appendChild(li);

      });

    }
};

document.getElementById('addTask').onclick=()=>{
    let taskInput=document.getElementById('taskInput');
    if(taskInput.value!==''){
    toDoApp.addTask(taskInput.value);
    taskInput.value='';
    }
    else{
        alert("Enter Valid Task")
    }
};
toDoApp.addTask("Learn Javascript");