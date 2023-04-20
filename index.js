//event listener when the page loads
window.addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form");
    const input =document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");
    console.log(form);
    //eventlistener for form submit
    form.addEventListener('submit',(e)=>{
        e.preventDefault();//prevent
       // console.log("Submit form")
       //assigning the input value to the task variable
       const task=input.value;
         //test condition of whether value is inserted or not
        //  if(!task){
        //     //alert("please enter some tasks to continue");
        //  }
         
        //  else{
        //     alert("Task added successfully");
        //  }
         //creating the  div elements 
         const task_el=document.createElement("div");
         task_el.classList.add("task");

         //creating task content
         const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");

        //task_content_el.innerText = task;
         task_el.appendChild(task_content_el);
        
        
       const task_input_el=document.createElement("input");
       task_input_el.classList.add("text");
       task_input_el.type="text";
      task_input_el.value=task;
       task_input_el.setAttribute("readonly","readonly");

       task_content_el.appendChild(task_input_el);
       const task_actions_el=document.createElement("div");
       task_actions_el.classList.add("actions");
       
      //  const task_edit_el=document.createElement("edit");
      //  task_edit_el.classList.add("edit");
      //  task_edit_el.innerHTML="Edit";
       //append the buttons
      
      //  task_actions_el.appendChild(task_edit_el);

       task_el.appendChild(task_actions_el);

       const task_delete_el=document.createElement("button");
       task_delete_el.classList.add("delete");
       task_delete_el.innerHTML="Delete";
       task_actions_el.appendChild(task_delete_el);

         list_el.appendChild(task_el);
         
         input.value ="";

         task_delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
        });
    })
    
});