import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9cs5eb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-19 11.5h19M3.75 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 19.75h11.5m-2-2l2 2l-2 2");
}
</style><path class="x9cs5eb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:red-blood-cells-flow"} {...others} />);
}

export default Component;
