import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nora7_bbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.75 7.25l-4.5 8.5m7-8.5l4 8M7.5 18h8m-6-13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5-2l-4 4");
}
</style><path class="nora7_bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mesh-node-offline"} {...others} />);
}

export default Component;
