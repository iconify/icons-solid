import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckdp292ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5V14a7.5 7.5 0 0 0 15 0V9.5H16V14a4 4 0 0 1-8 0V9.5ZM9 5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-4.5 7.25H8m8 0h3.5");
}
</style><path class="ckdp292ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lead-generation"} {...others} />);
}

export default Component;
