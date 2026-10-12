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

.sjvuvhxhq {
  d: path("M4.75 8V6A1.75 1.75 0 0 1 6.5 4.25h1.25A1.75 1.75 0 0 1 9.5 6v2m1.49 2.15l4.77.95q.74.15.74.9v1.5q0 .75-.74.84l-4.77.57q-.74.09-.74-.66v-3.5q0-.75.74-.6m8.01 1.1l2.25-.75M19 14.25l2.25.75");
}

.ymlur8ssx {
  width: 7.5px;
  height: 9px;
  x: 2.75px;
  y: 8px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="ymlur8ssx"/><path class="sjvuvhxhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:leaf-blower"} {...others} />);
}

export default Component;
