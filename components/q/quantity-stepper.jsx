import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0x17gblg {
  d: path("M8 7.25v9.5m8-9.5v9.5M4.5 12h2m4.75-1.75l.75-.5v4.5M17.5 12h2.25m-1.12-1.12v2.25");
}

.m9x7zp0jc {
  width: 18.5px;
  height: 9.5px;
  x: 2.75px;
  y: 7.25px;
  rx: 4.75px;
}
</style><g class="hntgybcog"><rect class="m9x7zp0jc"/><path class="k0x17gblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:quantity-stepper"} {...others} />);
}

export default Component;
