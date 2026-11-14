import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emgavob2s {
  d: path("M5.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5V12H12l.5 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2hc9xs5y {
  d: path("M11.186 13.919a4.5 4.5 0 1 1-7.372 0M9 9.5l8.5 6m.25 1.5h2a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 16 18.75A1.75 1.75 0 0 1 17.75 17");
}
</style><g class="hntgybcog"><path class="emgavob2s"/><path class="y2hc9xs5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wheelchair-curling"} {...others} />);
}

export default Component;
