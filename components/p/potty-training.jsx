import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar3_hdb6g {
  width: 4.5px;
  height: 8.75px;
  x: 5px;
  y: 3px;
  rx: 1.75px;
}

.h-mw3y8lz {
  d: path("M4.75 11.75h14.5a1 1 0 0 1 1 1c0 3.6-2.9 6.25-6.5 6.25h-3.5c-3.6 0-6.5-2.65-6.5-6.25a1 1 0 0 1 1-1M8 21.25h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="ar3_hdb6g"/><path class="h-mw3y8lz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:potty-training"} {...others} />);
}

export default Component;
