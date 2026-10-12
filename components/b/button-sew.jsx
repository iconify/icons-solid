import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.e30mlr4ih {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 12a6.5 6.5 0 1 1-13 0a6.5 6.5 0 1 1 13 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z_wb0h3rz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10h.01M14 10h.01M10 14h.01M14 14h.01");
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="e30mlr4ih"/><path class="z_wb0h3rz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:button-sew"} {...others} />);
}

export default Component;
