import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7r-dwbvl {
  width: 5px;
  height: 2.5px;
  x: 9.5px;
  y: 8px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t2jk5r0rp {
  d: path("M5.75 21.25v-6h5v6m2.5 0v-6h5v6");
}

.tzvmh1l8q {
  d: path("M2.75 21.25V11a9.25 7.25 0 0 1 18.5 0v10.25Z");
}
</style><g class="hntgybcog"><path class="tzvmh1l8q"/><path class="t2jk5r0rp"/><rect class="f7r-dwbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:warehouse-building"} {...others} />);
}

export default Component;
