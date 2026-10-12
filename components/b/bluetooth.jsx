import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1ztaob7y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.75 7.25l10.5 9.5l-5.25 4.5V2.75l5.25 4.5l-10.5 9.5");
}

.mifla9vvb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.5 12h.01m16.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="g1ztaob7y"/><path class="mifla9vvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bluetooth"} {...others} />);
}

export default Component;
