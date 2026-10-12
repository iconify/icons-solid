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

.kbxo7mv5x {
  d: path("M7.75 8.75h8.5a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1m-3 3.25H14");
}

.x1x79wb_q {
  width: 17.5px;
  height: 13.5px;
  x: 3.25px;
  y: 5.25px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="x1x79wb_q"/><path class="kbxo7mv5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:buckle"} {...others} />);
}

export default Component;
