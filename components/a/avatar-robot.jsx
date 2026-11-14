import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dt0ucubxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 7.5h3.5A5.25 5.25 0 0 1 19 12.75v2A5.25 5.25 0 0 1 13.75 20h-3.5A5.25 5.25 0 0 1 5 14.75v-2a5.25 5.25 0 0 1 5.25-5.25m1.75-4v4M2.25 12v3.5m19.5-3.5v3.5M9 12.5h.01m5.99 0h.01m-5.01 4h4");
}
</style><path class="dt0ucubxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:avatar-robot"} {...others} />);
}

export default Component;
