import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsz0csbdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21V3h9v18M2.5 21h19M15.026 5.158l3-1A1.5 1.5 0 0 1 20 5.581v12.748a1.5 1.5 0 0 1-1.136 1.455l-3 .75A1.5 1.5 0 0 1 14 19.079V6.581a1.5 1.5 0 0 1 1.026-1.423M17 12.25h.01");
}
</style><path class="jsz0csbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:backdoor"} {...others} />);
}

export default Component;
