import {useState} from 'react'

export const EditTodoForm = ({editTodo, deleteTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    
      e.preventDefault();
            
      if (value === '') {
        deleteTodo(task.id);
      } else {
      editTodo(value, task.id);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <div>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder='Update task'
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className='todo-btn'>Update</button>
    </div>
  </form>
  )
}