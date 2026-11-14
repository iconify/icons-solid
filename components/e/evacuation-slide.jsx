import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qf_cydvuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 2.5h1.75A2.625 2.625 0 0 1 10 5.125v4.75A2.625 2.625 0 0 1 7.375 12.5h-1.75A2.625 2.625 0 0 1 3 9.875v-4.75A2.625 2.625 0 0 1 5.625 2.5M10 9.5c5 0 5.5 11.5 11.5 11.5m-19 0H13");
}
</style><path class="qf_cydvuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:evacuation-slide"} {...others} />);
}

export default Component;
