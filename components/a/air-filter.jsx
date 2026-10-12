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

.qbq7igoku {
  d: path("m5.25 8.5l2.25 7l2.25-7l2.25 7l2.25-7l2.25 7l2.25-7");
}

.soqifdb1n {
  width: 18.5px;
  height: 13px;
  x: 2.75px;
  y: 5.5px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="soqifdb1n"/><path class="qbq7igoku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:air-filter"} {...others} />);
}

export default Component;
