import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_le0lbwj {
  d: path("M15.25 8.75v-3.5a2.5 2.5 0 0 0-2.5-2.5h-7.5a2.5 2.5 0 0 0-2.5 2.5v7.5a2.5 2.5 0 0 0 2.5 2.5h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qz5af5-yy {
  width: 12.5px;
  height: 12.5px;
  x: 8.75px;
  y: 8.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="qz5af5-yy"/><path class="h_le0lbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:copy-down"} {...others} />);
}

export default Component;
