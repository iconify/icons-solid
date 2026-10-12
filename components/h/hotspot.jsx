import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8vsfjbnr {
  d: path("M10.75 18.25h2.5M10.59 7.09a2 2 0 0 1 2.82 0M8.46 4.96a5 5 0 0 1 7.08 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lt7w--kiw {
  width: 8px;
  height: 11px;
  x: 8px;
  y: 10.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="lt7w--kiw"/><path class="h8vsfjbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hotspot"} {...others} />);
}

export default Component;
