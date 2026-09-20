import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.denk-1bex {
  fill: currentColor;
  d: path("M11.836 20.856q-.144-.143-.144-.356V13H4.308q-.343 0-.576-.232t-.232-.576v-.384q0-.343.232-.576T4.308 11h7.384V3.5q0-.213.144-.356T12.193 3t.356.144t.143.356V11h7q.344 0 .576.232t.232.576v.384q0 .344-.232.576t-.576.232h-7v7.5q0 .213-.144.356q-.143.144-.356.144t-.356-.144");
}
</style><path class="denk-1bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-flex-center-outline-rounded"} {...others} />);
}

export default Component;
