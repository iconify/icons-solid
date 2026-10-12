import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mv2wmobfw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8.75h14a7 7 0 0 1-14 0m.8 3.25h12.4m-6.2-3.25v7m-7-7h-1.5m15.5 0h3");
}

.xzt8_p54b {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 19h.01M13 20.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mv2wmobfw"/><path class="xzt8_p54b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sieve"} {...others} />);
}

export default Component;
