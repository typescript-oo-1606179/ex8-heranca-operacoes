class OperacaoMatematica {
  constructor(
    private operando1: number,
    private operando2: number,
    private operacao: string
  ) {}

  public getOperando1(): number {
    return this.operando1;
  }

  public getOperando2(): number {
    return this.operando2;
  }

  public setOperando1(newOperando: number) {
    if (newOperando < 0) {
      return "Não é possível alterar para valores negativos";
    }

    this.operando1 = newOperando;

    return "Operando alterado com sucesso!";
  }

  public setOperando2(newOperando: number) {
    if (newOperando < 0) {
      return "Não é possível alterar para valores negativos";
    }

    this.operando2 = newOperando;

    return "Operando alterado com sucesso!";
  }

  protected calcular(): number {
    return 0;
  }

  public mostrarResultado() {
    console.log(
      `Operação: ${this.operando1} ${this.operacao} ${
        this.operando2
      } = ${this.calcular()}`
    );
  }
}

class Adicao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "+");
  }

  protected calcular(): number {
    return this.getOperando1() + this.getOperando2();
  }
}

const adicao = new Adicao(5, 2);

adicao.mostrarResultado();

const adicao2 = new Adicao(6, 3);

adicao2.mostrarResultado();

const adicao3 = new Adicao(58, 167);

adicao3.mostrarResultado();

adicao3.setOperando1(2);
adicao3.setOperando2(8);

adicao3.mostrarResultado();

class Subtracao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "-");
  }

  protected calcular(): number {
    return this.getOperando1() - this.getOperando2();
  }
}

const subtacao = new Subtracao(5, 2);

subtacao.mostrarResultado();

subtacao.setOperando1(657);
subtacao.setOperando2(246);

subtacao.mostrarResultado();

subtacao.setOperando1(5);

subtacao.mostrarResultado();

class Multiplicacao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "*");
  }

  protected calcular(): number {
    return this.getOperando1() * this.getOperando2();
  }
}

const multiplicacao = new Multiplicacao(2, 6);

multiplicacao.mostrarResultado();

multiplicacao.setOperando2(55);

multiplicacao.mostrarResultado();

class Divisao extends OperacaoMatematica {
  constructor(operando1: number, operando2: number) {
    super(operando1, operando2, "/");
  }

  protected calcular(): number {
    return this.getOperando1() / this.getOperando2();
  }
}

const divisao = new Divisao(10, 2);

divisao.mostrarResultado();

divisao.setOperando1(70);

divisao.mostrarResultado();

console.log("Retorno de setOperando:", divisao.setOperando1(-6));

divisao.mostrarResultado();
