import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwvgtfb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15.5h11A1.5 1.5 0 0 1 19 17a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17a1.5 1.5 0 0 1 1.5-1.5m-3 6h17m-12-9L7 10m5 2.5v-3m3.5 3L17 10M7 4.5h10m-8-2l-2 2l2 2m6-4l2 2l-2 2");
}
</style><path class="rwvgtfb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sprinkler-oscillating"} {...others} />);
}

export default Component;
