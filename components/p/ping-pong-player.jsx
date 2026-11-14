import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.quj98_bga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 21.5v-3a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v3m.5-15a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m1 2.5l-2.75 6.25");
}
</style><path class="quj98_bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ping-pong-player"} {...others} />);
}

export default Component;
