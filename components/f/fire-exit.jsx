import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwac74b8x {
  d: path("M14 18.25V6h4.25v12.25M6.5 13.5H12M9.5 11l2.5 2.5L9.5 16M8 6c1.25 1 1.75 1.75 1.75 2.75a1.75 1.75 0 0 1-3.5 0C6.25 8 6.75 7.25 8 6");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="lwac74b8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fire-exit"} {...others} />);
}

export default Component;
