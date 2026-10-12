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

.hokuwbeeq {
  d: path("M15.5 6.5v6m-8.75-7H8.5q1 0 1 1v6q0 1-1 1H6.75q-1 0-1-1v-6q0-1 1-1m-.25 0L9 3h9M5.75 11H4.5a1.75 1.75 0 0 0-1.75 1.75v8.5");
}

.i1bacv_vt {
  width: 11.75px;
  height: 6px;
  x: 9.5px;
  y: 6.5px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="i1bacv_vt"/><path class="hokuwbeeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grease-gun"} {...others} />);
}

export default Component;
