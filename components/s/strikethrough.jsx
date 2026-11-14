import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m3_79ebjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 7c-.6-1.7-2.3-2.5-4.5-2.5c-2.8 0-4.5 1.4-4.5 3.5c0 1.6 1.1 2.6 3 3.25m3 1.5c1.9.65 3 1.65 3 3.25c0 2.1-1.9 3.5-4.5 3.5c-2.4 0-4.1-.8-4.75-2.5M4 12h16");
}
</style><path class="m3_79ebjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:strikethrough"} {...others} />);
}

export default Component;
