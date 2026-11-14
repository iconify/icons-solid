import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gwvx2rbui {
  d: path("m18 10l2 2l2-2m-3.75 7.25A8 8 0 0 1 8 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k1v3zobpr {
  d: path("M5.25 4.25L8 5l-.75 2.75M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.tfo2qlbsq {
  d: path("M10.75 18.25L8 19l.75 2.75m-4.25-7A8 8 0 0 1 8 5");
}

.vz1dcfb4q {
  d: path("M13.5 4.25A8 8 0 0 1 20 12");
}
</style><g class="hntgybcog"><path class="vz1dcfb4q"/><path class="gwvx2rbui"/><path class="tfo2qlbsq"/><path class="k1v3zobpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gyratory"} {...others} />);
}

export default Component;
