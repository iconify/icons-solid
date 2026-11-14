import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5sw-bgrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5h1A1.75 1.75 0 0 1 7 6.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 2.5 8.75v-2.5A1.75 1.75 0 0 1 4.25 4.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 11.5 4.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 8.75v-2.5a1.75 1.75 0 0 1 1.75-1.75M21.5 17h-19m3-3l-3 3l3 3");
}
</style><path class="l5sw-bgrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fifo-fefo"} {...others} />);
}

export default Component;
