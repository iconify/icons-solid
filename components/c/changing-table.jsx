import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gmpr89ihy {
  d: path("M2.75 7.5v-3m18.5 3v-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lpvg7fb0s {
  d: path("M10.5 15.5h3m-3 3h3");
}

.oh_wixbyg {
  width: 15.5px;
  height: 8.5px;
  x: 4.25px;
  y: 12.75px;
  rx: 1.5px;
}

.ztxlk6bte {
  width: 18.5px;
  height: 3px;
  x: 2.75px;
  y: 7.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="ztxlk6bte"/><path class="gmpr89ihy"/><rect class="oh_wixbyg"/><path class="lpvg7fb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:changing-table"} {...others} />);
}

export default Component;
