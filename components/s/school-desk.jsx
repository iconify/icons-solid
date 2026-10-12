import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fe4xh4bkm {
  width: 18.5px;
  height: 4px;
  x: 2.75px;
  y: 6.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_yefvroc {
  d: path("M5.75 10.75v10.5m12.5-10.5v10.5m-12.5-5h12.5");
}
</style><g class="hntgybcog"><rect class="fe4xh4bkm"/><path class="q_yefvroc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:school-desk"} {...others} />);
}

export default Component;
