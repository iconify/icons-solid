import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpnn9wn6m {
  d: path("M15 10.5h-2.5m2.5 3h-1.5m1.5 3h-2.5m-1-9v-3a1.75 1.75 0 0 0-3.5 0m0 15v1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxqula1vx {
  width: 13px;
  height: 12px;
  x: 5px;
  y: 7.5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="wxqula1vx"/><path class="cpnn9wn6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:urine-bag"} {...others} />);
}

export default Component;
