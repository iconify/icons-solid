import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gu4_c4bcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.671 3.335l4.646 2.323a1.5 1.5 0 0 1 0 2.684l-4.646 2.323a1.5 1.5 0 0 1-1.342 0L5.683 8.342a1.5 1.5 0 0 1 0-2.684l4.646-2.323a1.5 1.5 0 0 1 1.342 0M3 11l8 4l2.286-1.143m2.236-1.118L19 11M3 15l8 4l2.5-1.25m2-2.25l5 5m0-5l-5 5");
}
</style><path class="gu4_c4bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cache-clear"} {...others} />);
}

export default Component;
