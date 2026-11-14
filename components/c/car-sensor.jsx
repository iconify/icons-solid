import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmj3lr0vt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 8l1.5-3.25Q7 4 8 4h8q1 0 1.5.75L19 8M5.5 8h13a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 10.5A2.5 2.5 0 0 1 5.5 8m6.5 2.5h.01M8.5 15.75q3.5 2 7 0M6 19q6 3.5 12 0");
}
</style><path class="tmj3lr0vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-sensor"} {...others} />);
}

export default Component;
