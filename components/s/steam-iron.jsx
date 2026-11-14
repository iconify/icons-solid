import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5108rb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19h17.5v-5.5a2 2 0 0 0-2-2H11c-4.5 0-7 3-8 7.5m7.5-7.5l1-3.25h8l1 3.25m-15-2c-1-1.5 1-3.5 0-5M8.25 9c-1-1.5 1-3.5 0-5");
}
</style><path class="e5108rb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:steam-iron"} {...others} />);
}

export default Component;
