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

.t97og4b8d {
  d: path("m8.5 6.75l3.5 5v5.75m0-5.75l3.5-5m-6.75 5h6.5m-6.5 3h6.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="t97og4b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:currency-yen"} {...others} />);
}

export default Component;
