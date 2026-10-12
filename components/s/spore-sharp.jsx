import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2ean4bsg {
  cx: 12px;
  cy: 4.5px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hkwurnbrq {
  cx: 18px;
  cy: 7px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jclsa9pnm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 13.5h.01M11 17h.01");
}

.tp9mb1u4p {
  cx: 9px;
  cy: 15px;
  r: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v78ltpbgy {
  cx: 19.5px;
  cy: 13.5px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="tp9mb1u4p"/><path class="jclsa9pnm"/><circle class="hkwurnbrq"/><circle class="c2ean4bsg"/><circle class="v78ltpbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spore-sharp"} {...others} />);
}

export default Component;
