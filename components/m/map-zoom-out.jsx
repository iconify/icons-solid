import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i32saebhb {
  d: path("M8 11h6m2.5 5.5L21 21");
}

.ry59zbcad {
  cx: 11px;
  cy: 11px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="ry59zbcad"/><path class="i32saebhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:map-zoom-out"} {...others} />);
}

export default Component;
