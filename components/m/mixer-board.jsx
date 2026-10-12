import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_l6w8bjn {
  d: path("M8 7v.5m0 3V17m4-10v5.5m0 3V17m4-10v2.5m0 3V17M6.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4-3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuy337bcl {
  width: 18px;
  height: 16px;
  x: 3px;
  y: 4px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="zuy337bcl"/><path class="f_l6w8bjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mixer-board"} {...others} />);
}

export default Component;
