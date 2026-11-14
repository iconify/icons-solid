import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hx9_-6bkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 5h7a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3a3 3 0 0 1 3-3M8 5a5 5 0 0 1 8 0m-8 6a5 5 0 0 0 8 0M4.5 21.5c0-3 3.25-5.5 7.5-5.5s7.5 2.5 7.5 5.5");
}
</style><path class="hx9_-6bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:goggles-person"} {...others} />);
}

export default Component;
