import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwwbpgbvl {
  cx: 12px;
  cy: 14px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ttf32rblh {
  cx: 12px;
  cy: 14px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ydv1z6bal {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7h14.5");
}

.zep8nmydx {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.zl5bs9bqu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 4.9h.01m2.49 0h.01m2.49 0h.01");
}
</style><g class="y9tr6bcfx"><rect class="zep8nmydx"/><path class="ydv1z6bal"/><path class="zl5bs9bqu"/><circle class="ttf32rblh"/><circle class="mwwbpgbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:amplifier"} {...others} />);
}

export default Component;
