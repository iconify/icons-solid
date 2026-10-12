import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ki_c6cb0n {
  cx: 8px;
  cy: 18px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lznraacca {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 18h.01");
}

.t9ep2i0ft {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 13.5l8.25 5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xbxre6a9r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14.25v-5H7V12h6v3H3.25zm0-8v-3.5H10");
}
</style><g class="ux2u0rbkq"><path class="xbxre6a9r"/><circle class="ki_c6cb0n"/><path class="lznraacca"/><path class="t9ep2i0ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rickshaw-sharp"} {...others} />);
}

export default Component;
