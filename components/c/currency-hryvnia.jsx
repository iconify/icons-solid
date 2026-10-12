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

.xhlflrrke {
  d: path("M9 8.25c.5-1 1.6-1.5 3-1.5c1.75 0 3 1 3 2.4c0 2.6-6 3.1-6 6.2c0 1.5 1.25 2.4 3 2.4c1.4 0 2.5-.5 3-1.5M7.25 10.5h9.5m-9.5 3h9.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="xhlflrrke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:currency-hryvnia"} {...others} />);
}

export default Component;
