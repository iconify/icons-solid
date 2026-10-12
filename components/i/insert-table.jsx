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

.mf7y1czjs {
  d: path("M2.75 7.25h12m-6 0v7.5m9.5.5v6m-3-3h6");
}

.trd540byi {
  width: 12px;
  height: 12px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="trd540byi"/><path class="mf7y1czjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:insert-table"} {...others} />);
}

export default Component;
