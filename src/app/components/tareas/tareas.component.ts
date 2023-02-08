import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit{

  listaTareas: Tarea[]=[];
  nombreTarea: string = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarTarea(){
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listaTareas.push(tarea);

    this.nombreTarea = '';
  }

  eliminarTarea(i: number){
    this.listaTareas.splice(i, 1);
  }

  actualizarEstado(tarea: Tarea, i: number) {
    this.listaTareas[i].estado = !tarea.estado;
  }
}
