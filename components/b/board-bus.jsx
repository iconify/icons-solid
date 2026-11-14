import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrw4upp7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v7.75A4.375 4.375 0 0 1 15.125 19h-6.25A4.375 4.375 0 0 1 4.5 14.625v-7.75A4.375 4.375 0 0 1 8.875 2.5M7.5 19v2.5m9-2.5v2.5m-12-11h15m-5 0V19M8 15h.01");
}
</style><path class="zrw4upp7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:board-bus"} {...others} />);
}

export default Component;
