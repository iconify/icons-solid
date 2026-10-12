import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4da7x21x {
  cx: 16.75px;
  cy: 16.75px;
  r: 4.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wba6uoprr {
  d: path("m2.75 9.5l6-5.25l6 5.25v6.25a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5Z");
}

.wi-wziepp {
  d: path("M18.1 15.57c-.25-.54-.74-.9-1.35-.9c-.81 0-1.41.47-1.41 1.04c0 1.46 2.81.73 2.81 2.14c0 .59-.6.99-1.41.99c-.63 0-1.15-.34-1.37-.88");
}
</style><g class="hntgybcog"><path class="wba6uoprr"/><circle class="d4da7x21x"/><path class="wi-wziepp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:collateral"} {...others} />);
}

export default Component;
