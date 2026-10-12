import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q54bstbmy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9h.01M15 9h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xufeu2b_t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 12.75l1.5 1.5l1.5-1.5l1.5 1.5l1.5-1.5l1.5 1.5l1.5-1.5h.65");
}

.z2ma-2b8r {
  cx: 16.9px;
  cy: 12.75px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="q54bstbmy"/><path class="xufeu2b_t"/><circle class="z2ma-2b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:zipper-mouth-sharp"} {...others} />);
}

export default Component;
