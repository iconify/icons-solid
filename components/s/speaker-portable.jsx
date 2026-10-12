import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jol95vy1q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 12.5h.01m10.49 0h.01");
}

.qtvxheqgp {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 7.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 5.25px;
}

.siaez_jfa {
  cx: 12px;
  cy: 12.5px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="qtvxheqgp"/><circle class="siaez_jfa"/><path class="jol95vy1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:speaker-portable"} {...others} />);
}

export default Component;
