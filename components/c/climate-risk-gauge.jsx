import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k3drw316v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5a9 9 0 0 1 18 0M7.5 5.75L9 8.25m7.5-2.5L15 8.25m-3 5.25l5.25-3m-5.25 3h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="k3drw316v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:climate-risk-gauge"} {...others} />);
}

export default Component;
