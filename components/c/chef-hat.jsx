import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rkb-ikq9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15.5v-3.25c-2-.5-3-2.35-2.5-4.25c.5-1.75 2.5-2.75 4.25-2C9.9 4.6 10.9 4 12 4s2.1.6 2.75 2c1.75-.75 3.75.25 4.25 2c.5 1.9-.5 3.75-2.5 4.25v3.25m-7.5 0h6a1.5 1.5 0 0 1 1.5 1.5v1.5A1.5 1.5 0 0 1 15 20H9a1.5 1.5 0 0 1-1.5-1.5V17A1.5 1.5 0 0 1 9 15.5");
}
</style><path class="rkb-ikq9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chef-hat"} {...others} />);
}

export default Component;
