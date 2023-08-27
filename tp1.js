const rosa = {
  gusto(obj) {
    return obj.obtenerPeso() > 2000;
  },
};

const estefania = {
  gusto(obj) {
    return obj.obtenerColor().fuerte();
  },
};

const luisa = {
  gusto(obj) {
    return obj.material().brilla();
  },
};

const juan = {
  gusto(obj) {
    return (
      obj.obtenerColor().fuerte() ||
      obj.material().brilla() ||
      (obj.obtenerPeso() > 1200
        ? obj.obtenerPeso() < 1800
          ? true
          : false
        : false)
    );
  },
};

const rojo = {
  fuerte() {
    return true;
  },
};

const verde = {
  fuerte() {
    return true;
  },
};

const celeste = {
  fuerte() {
    return false;
  },
};

const pardo = {
  fuerte() {
    return false;
  },
};

const naranja = {
  fuerte() {
    return true;
  },
};

const cobre = {
  brilla() {
    return true;
  },
};

const vidrio = {
  brilla() {
    return true;
  },
};

const lino = {
  brilla() {
    return false;
  },
};

const madera = {
  brilla() {
    return false;
  },
};

const cuero = {
  brilla() {
    return false;
  },
};

const remera = {
  obtenerPeso() {
    return 800;
  },
  obtenerColor() {
    return rojo;
  },
  material() {
    return lino;
  },
  cambiarPeso(peso) {},
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const pelota = {
  obtenerPeso() {
    return 1300;
  },
  obtenerColor() {
    return pardo;
  },
  material() {
    return cuero;
  },
  cambiarPeso(peso) {},
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const bibliteca = {
  obtenerPeso() {
    return 8000;
  },
  obtenerColor() {
    return verde;
  },
  material() {
    return madera;
  },
  cambiarPeso(peso) {},
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const muñeco = {
  peso: 1700,
  obtenerPeso() {
    return this.peso;
  },
  obtenerColor() {
    return celeste;
  },
  material() {
    return vidrio;
  },
  cambiarPeso(peso) {
    this.peso = peso;
  },
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const placa = {
  peso: 500,
  color: rojo,
  obtenerPeso() {
    return this.peso;
  },
  obtenerColor() {
    return this.color;
  },
  material() {
    return cobre;
  },
  cambiarPeso(peso) {
    this.peso = peso;
  },
  cambiarColor(color) {
    this.color = color;
  },
  cambiarInterior(obj) {},
};

const arito = {
  obtenerPeso() {
    return 180;
  },
  obtenerColor() {
    return celeste;
  },
  material() {
    return cobre;
  },
  cambiarPeso(peso) {},
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const banquito = {
  color: naranja,
  obtenerPeso() {
    return 1700;
  },
  obtenerColor() {
    return this.color;
  },
  material() {
    return madera;
  },
  cambiarPeso(peso) {},
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const cajita = {
  interior: banquito,
  obtenerPeso() {
    return 400 + this.interior.obtenerPeso();
  },
  obtenerColor() {
    return rojo;
  },
  material() {
    return cobre;
  },
  cambiarPeso(peso) {},
  cambiarColor(color) {},
  cambiarInterior(obj) {},
};

const bolichito = {
  mostrador: pelota,
  vidriera: remera,
  esBrillante() {
    return (
      this.mostrador.material().brilla() && this.vidriera.material().brilla()
    );
  },
  esMonocromatico() {
    return this.mostrador.obtenerColor() == this.vidriera.obtenerColor();
  },
  estaDesequilibrado() {
    return this.mostrador.obtenerPeso() > this.vidriera.obtenerPeso();
  },
  tieneAlgoDeColor(color) {
    return (
      this.mostrador.obtenerColor() == color ||
      this.vidriera.obtenerColor() == color
    );
  },
  puedeMejorar() {
    return this.estaDesequilibrado() || this.esMonocromatico();
  },
  puedeOfrecerAlgoA(persona) {
    return persona.gusto(this.mostrador) || persona.gusto(this.vidriera);
  },
  cambiarMostrador(obj) {
    this.vidriera == obj
      ? console.log("no se pueden duplicar objetos -cambio rechazado")
      : (this.mostrador = obj);
  },
  cambiarVidriera(obj) {
    this.mostrador == obj
      ? console.log("no se pueden duplicar objetos -cambio rechazado")
      : (this.vidriera = obj);
  },
};
