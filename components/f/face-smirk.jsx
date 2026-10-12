import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-5rwxbpv {
  d: path("M7.75 10h2.5m3.5 0h2.5m-2.5-2.75c.75-.5 1.75-.6 2.5-.25m-7 8.5c1.9.55 3.9.35 5.5-1");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="u-5rwxbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:face-smirk"} {...others} />);
}

export default Component;
