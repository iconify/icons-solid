import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gj0_ekbpo {
  cx: 9px;
  cy: 11px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kjxad3akd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 11.5h.01m5.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xkuc3nbhq {
  cx: 15px;
  cy: 11px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5aer9bsr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.75V11a7.5 7.5 0 0 1 15 0v9.75l-2.5-2l-2.5 2l-2.5-2l-2.5 2l-2.5-2Z");
}
</style><g class="ux2u0rbkq"><path class="z5aer9bsr"/><circle class="gj0_ekbpo"/><circle class="xkuc3nbhq"/><path class="kjxad3akd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ghost-game-sharp"} {...others} />);
}

export default Component;
