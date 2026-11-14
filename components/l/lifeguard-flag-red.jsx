import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ksakn_28e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4h10.5A1.75 1.75 0 0 1 19 5.75v6a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 11.75v-6A1.75 1.75 0 0 1 6.75 4M5 3v18.5M5 8.75h14M8 19.5q1.75-1.5 3.5 0t3.5 0t3.5 0t3 .5");
}
</style><path class="ksakn_28e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lifeguard-flag-red"} {...others} />);
}

export default Component;
