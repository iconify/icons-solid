import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2xsc8bbs {
  d: path("M9.5 6.25v-1a2.5 2.5 0 0 1 5 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qx-ss375m {
  width: 8px;
  height: 5px;
  x: 8px;
  y: 13.5px;
  rx: 1.5px;
}

.t3b6h-rrc {
  width: 14.5px;
  height: 15px;
  x: 4.75px;
  y: 6.25px;
  rx: 3.25px;
}
</style><g class="hntgybcog"><rect class="t3b6h-rrc"/><path class="h2xsc8bbs"/><rect class="qx-ss375m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:backpack"} {...others} />);
}

export default Component;
