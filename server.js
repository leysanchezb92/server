const express= require('express');
const server= express();

server.listen(3000, () =>{
    console.log('Servidor iniciado desde http');
});
const comisiones = {
    dwfs: [
      {
        id: 1,
        name: "Leidy"
      },
      {
        id: 2,
        name: "Daniela"
      },
      {
        id: 3,
        name: "Camilo"
      }, {
        id: 4,
        name: "Andrea"
      }, {
        id: 5,
        name: "Hector"
      }, {
        id: 6,
        name: "Gustavo"
      }
    ],
    bigdata:[
        {
            id: 1,
            name: "Arturo"
        },
        {
            id: 2,
            name: "Daniel"
        },
        {
            id: 3,
            name: "Camila"
        },
        {
            id: 4,
            name: "Cristian"
        },
        {
            id: 5,
            name: "Armando"
        },
        {
            id: 6,
            name: "Katerin"
        }
    ],
    dwa: [
        {
            id: 1,
            name: "Mario"
        },
        {
            id: 2,
            name: "Jack"
        },
        {
            id: 3,
            name: "Thomas"
        },
        {
            id: 4,
            name: "Andres"
        },
        {
            id: 5,
            name: "Killian"
        },
        {
            id: 6,
            name: "Stefany"
        }
    ]
};
// const bigdata

server.get('/acamica/:comision/alumnos/:id?', (req, res) => {
    const {params,query}= req;
    const {comision, id:idParam}= params;
    const {name}= query;
    const id=parseInt(idParam);
    const current = comisiones[comision];
    
    if(!id){
        if(!current){
            res.status(404);
            res.json({"message":"Comision invalida"});
        } else if(name){
            res.json(current.filter(element => element.name.toLowerCase() === name.toLowerCase()));  
        }else{
            res.json(current);
        }
    } else{
        const alumno = current.find(element=> element.id === id);
        if (alumno){
            res.json(alumno);
        } else{
            res.status(404);
            res.json({"message":"Usuario no encontrado"});
        }
        
    }
});

