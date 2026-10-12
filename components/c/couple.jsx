import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cc5gq7bwg {
  cx: 17px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tn8ellfmw {
  d: path("M7 9.5v6.25m-2 5.5l2-5.5l2 5.5M7 10.5l-2.75 3M17 9.5v6.25m-2 5.5l2-5.5l2 5.5M17 10.5l2.75 3M7 10.5l5 3.25l5-3.25");
}

.v-2iygbgq {
  cx: 7px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="v-2iygbgq"/><circle class="cc5gq7bwg"/><path class="tn8ellfmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:couple"} {...others} />);
}

export default Component;
