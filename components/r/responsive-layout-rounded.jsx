import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7l6ozmyr {
  fill: currentColor;
  d: path("M15.808 20q-.344 0-.576-.232T15 19.192v-8.576q0-.667-.475-1.141T13.385 9h-3.077q-.343 0-.576-.232T9.5 8.192V4.808q0-.343.232-.576T10.308 4h8.884q.344 0 .576.232t.232.576v14.384q0 .344-.232.576t-.576.232zm-5.5 0q-.344 0-.576-.232t-.232-.576v-8.384q0-.343.232-.576t.576-.232h2.884q.344 0 .576.232t.232.576v8.384q0 .344-.232.576t-.576.232zm-5.5 0q-.344 0-.576-.232T4 19.192v-8.384q0-.343.232-.576T4.808 10h2.884q.343 0 .576.232t.232.576v8.384q0 .344-.232.576T7.692 20z");
}
</style><path class="f7l6ozmyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:responsive-layout-rounded"} {...others} />);
}

export default Component;
