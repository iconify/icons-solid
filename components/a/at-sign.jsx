import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ait46xb0t {
  d: path("M8.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqmtfwbjw {
  d: path("M15.75 8.25v5.25a2.375 2.375 0 0 0 4.75 0V12a8.5 8.5 0 1 0-3.5 6.75");
}
</style><g class="hntgybcog"><path class="ait46xb0t"/><path class="wqmtfwbjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:at-sign"} {...others} />);
}

export default Component;
