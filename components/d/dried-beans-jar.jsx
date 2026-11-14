import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fv4zlfk2y {
  d: path("M8.75 8.5h6.5a5.25 5.25 0 0 1 5.25 5.25v2.5a5.25 5.25 0 0 1-5.25 5.25h-6.5a5.25 5.25 0 0 1-5.25-5.25v-2.5A5.25 5.25 0 0 1 8.75 8.5M7.25 4h9.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-9.5A1.75 1.75 0 0 1 5.5 6.75v-1A1.75 1.75 0 0 1 7.25 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_aic4dyu {
  d: path("M10 12.75a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0m-3.5 4.5a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0m7 0a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="fv4zlfk2y"/><path class="l_aic4dyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dried-beans-jar"} {...others} />);
}

export default Component;
