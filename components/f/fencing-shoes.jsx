import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lycwa439r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18V8c0-1 .75-1.5 1.75-1.5H7c1 0 1.75 2.25 4 2.75l6 1.25c3 .5 4.5 2.5 4.5 5V18Zm0-2.75h19m-9-5.5l1 2.75");
}
</style><path class="lycwa439r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fencing-shoes"} {...others} />);
}

export default Component;
