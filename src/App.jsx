import React, { useState } from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    console.log(tarea);

    if (!tarea.trim()) {
      console.log("elemento vacio");
      return;
    }
    console.log(tarea);

    setTareas([...tareas, { id: shortid.generate(), nombreTarea: tarea }]);

    setTarea("");
  };

  return (
    <div className="container">
      <h1 className="text-center">CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {tareas.map((item) => (
              <li key={item.id} className="list-group-item">
                <span className="lead">Nombre de la tarea</span>
                <button className="btn btn-danger btn-sm float-right mx-2">
                  Eliminar
                </button>
                <button className="btn btn-warning btn-sm float-right mx-2">
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
