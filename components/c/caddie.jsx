import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.et0evyrrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-2 13.5V19a5 5 0 0 1 10 0v2.5M18.25 9za2.25 2.25 0 0 1 2.25 2.25v8a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 16 19.25v-8A2.25 2.25 0 0 1 18.25 9M17 9l-1-5.5M19.5 9l1.25-5.5");
}
</style><path class="et0evyrrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:caddie"} {...others} />);
}

export default Component;
