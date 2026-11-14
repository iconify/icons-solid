import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gj-_6lbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5v-1a7 7 0 0 1 14 0v1m-13.5 0zA2.5 2.5 0 0 1 8 16v2a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 3 18v-2a2.5 2.5 0 0 1 2.5-2.5m13 0zA2.5 2.5 0 0 1 21 16v2a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 16 18v-2a2.5 2.5 0 0 1 2.5-2.5");
}
</style><path class="gj-_6lbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:headphones"} {...others} />);
}

export default Component;
