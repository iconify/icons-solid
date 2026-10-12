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

.m5xhbpbfp {
  d: path("M6.5 9.25v5.5m11-5.5v5.5");
}

.va5xsmb9x {
  width: 5px;
  height: 2.5px;
  x: 9.5px;
  y: 10.75px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="m5xhbpbfp"/><rect class="va5xsmb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lens-cap"} {...others} />);
}

export default Component;
