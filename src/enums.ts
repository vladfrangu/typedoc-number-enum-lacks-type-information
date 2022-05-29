export enum StringEnum {
	Constant = 'A',
	AnotherConstant = 'B',
}

export enum ConstantNumberEnum {
	Constant = 1,
	AnotherConstant = 2,
}

export enum AutomaticNumberEnum {
	Constant,
	AnotherConstant,
}

export interface Example {
	constant: StringEnum;
	anotherConstant: ConstantNumberEnum;
	automatic: AutomaticNumberEnum;

	constant2: StringEnum.Constant;
	anotherConstant2: ConstantNumberEnum.AnotherConstant;
	automatic2: AutomaticNumberEnum.Constant;
}
