import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ri2q0tbfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.75 3.773l-4.25 7.361m-3.031-1.75l6.062 3.5l-2.768 8.794l-9.526-5.5Zm.015 3.473l-3.433 4.946m6.465-3.196l-2.567 5.446M3 17h.01m1.49 3.5h.01");
}
</style><path class="ri2q0tbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sweeping"} {...others} />);
}

export default Component;
