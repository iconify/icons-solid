import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ky8e0fbyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5za2 2 0 0 1 2 2v10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m-13 7h11m-8-2v4m5-4v4");
}
</style><path class="ky8e0fbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:axle"} {...others} />);
}

export default Component;
