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

.qp8bxebds {
  d: path("m12.218 7.71l.868.473a1.5 1.5 0 0 1 0 2.634l-.868.473A1.5 1.5 0 0 1 10 9.973v-.946a1.5 1.5 0 0 1 2.218-1.317");
}

.y_v88lukn {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6A3.5 3.5 0 0 1 6 2.5m1 14v5m10-5v5");
}
</style><g class="hntgybcog"><path class="y_v88lukn"/><path class="qp8bxebds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:jumbotron"} {...others} />);
}

export default Component;
