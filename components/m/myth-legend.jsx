import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k1gjd9fvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4za2 2 0 0 1 2 2v12a2 2 0 0 1-2 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m15 0za2 2 0 0 1 2 2v12a2 2 0 0 1-2 2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m-13 2.5h11m-11 11h11m-8-5.5h5");
}
</style><path class="k1gjd9fvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:myth-legend"} {...others} />);
}

export default Component;
