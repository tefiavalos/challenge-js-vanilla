class Vehiculo {
    constructor(marca, modelo, característica, precio){
        this.marca = marca,
        this.modelo = modelo,
        this.característica = característica,
        this.precio = precio
    }
} 

const array = []

const crearVehiculo = (marca, modelo, caracteristica, precio) => {
  const vehiculo = new Vehiculo(marca, modelo, caracteristica, precio)
  array.push(vehiculo)
}

crearVehiculo("Peugeot", "206", 4, 200000.00)
crearVehiculo("Honda", "Titan", "125c", 60000.00)
crearVehiculo("Peugeot", "208", 5, 250000.00)
crearVehiculo("Yamaha", "YBR", "160c", 80500.50)


for (let i = 0; i < array.length; i++) {
    if(typeof array[i].característica === 'string'){
        console.log(
            `Marca: ${array[i].marca} // Modelo: ${array[i].modelo} // Cilindrada: ${array[i].característica} // Precio: $${array[i].precio}`
        )
    }
    else{
        console.log(
            `Marca: ${array[i].marca} // Modelo: ${array[i].modelo} // Puertas: ${array[i].característica} // Precio: $${array[i].precio}`
            )
    }
}

const arrayOrdenado = ([...array.sort((a, b) => (b.precio - a.precio))])

console.log(`Vehículo más caro: ${arrayOrdenado[0].marca} ${arrayOrdenado[0].modelo}`)
console.log(`Vehículo más barato: ${arrayOrdenado[3].marca} ${arrayOrdenado[3].modelo}`)

array.forEach(element => {
    if(element.marca.includes("Y")){
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${element.marca} ${element.modelo} $${element.precio}`)
    }
});

console.log("Vehículos ordenados por precio de mayor a menor:") 
for (let i = 0; i < arrayOrdenado.length; i++) {
    console.log(`${arrayOrdenado[i].marca} ${arrayOrdenado[i].modelo}`)
}


