"use client"



type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    toggleDelete: (id: string) => void
}



export function TodoItem({ id, title, complete, toggleTodo, toggleDelete }: TodoItemProps) {
    return <li className="flex justify-between ">

        <div className="flex gap-3 items-center">
            <input 
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete} 
            onChange={e => toggleTodo(id, e.target.checked)} />

            

            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                {title}
            </label>
        </div>

        <button type= "button" onClick=
        
        {e => {
            toggleDelete(id)

            window.location.reload()
        
        
        }} className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none m-1"> Remove </button>
    </li>
}