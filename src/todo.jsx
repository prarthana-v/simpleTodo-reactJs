import React, { useState } from 'react'
import './assets/style.css'

const Todo = () => {

  const [task, settask] = useState("")
  const [alltask, setalltask] = useState([])

  const handlesubmit = (e) => {
    e.preventDefault();

    if (task == "") {
      alert("Please enter a task")
    }
    else {
      alltask.map((item) => {
        if (item.task == task) {
          alert("Task already exist")
          return false;
        }
      })

      let obj = {
        id: Math.floor(Math.random() * 10000),
        task,
        status: 'pending',
      }
      let newRecord = [...alltask, obj]
      setalltask(newRecord);
      console.log(alltask);
      alert('task added');
      settask("");
    }

  }

  //pending/completed 
  const taskdone = (id) => {
    let updatedtasks = alltask.map((com) => {
      if (com.id == id) {
        com.status = 'completed'
      }
      return com
    })
    console.log(updatedtasks);
    setalltask(updatedtasks)
  }
  // delete task
  const deleteTask = (id) => {
    alert(id)
    let newRecord = alltask.filter((item) => {
      return item.id !== id

    })
    console.log(newRecord);
    setalltask(newRecord);
  }
  return (
    <div className='body'>
      <section>
        <div className="container">
          <div className="row">
            <h2 align="center" className='my-5'>SIMPLE TODO LIST</h2>
            <form action="" onSubmit={handlesubmit}>
              <div className="input-group">
                <input type="text" className="input-box bg-light" placeholder='Enter Your Task' value={task} onChange={(e) => settask(e.target.value)} />
                <button className='btn btn-secondary input-btn' >ADD</button>
              </div>
            </form>

            <table className="table table-striped table-secondary mt-5
            ">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Task</th>
                  <th scope="col">Status</th>
                  <th scope="col" className='ps-5'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  alltask.map((item, index) => {
                    const { id, task, status } = item;
                    return (
                      <tr key={id}>
                        <td>{++index}</td>
                        <td>{task}</td>
                        <td>{status}</td>
                        <td><button className='btn btn-success' disabled={status == "completed"} onClick={() => taskdone(id)}>Done</button> <button className='btn btn-danger' onClick={() => deleteTask(id)}>Delete</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Todo
