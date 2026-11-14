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

.hr15mo58d {
  d: path("M3 4h18l-2 16H5Z");
}

.jirr18_xr {
  d: path("M10.5 6.75h3a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 8.25a1.5 1.5 0 0 1 1.5-1.5M4.25 13h15.5M4.5 16.5h15");
}
</style><g class="hntgybcog"><path class="hr15mo58d"/><path class="jirr18_xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bin-kerbside-crate"} {...others} />);
}

export default Component;
