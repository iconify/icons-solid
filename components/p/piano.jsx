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

.jcbg22mos {
  width: 16.5px;
  height: 3.75px;
  x: 3.75px;
  y: 17.5px;
  rx: 1px;
}

.o2gbzzbrr {
  d: path("M7.75 17.5v3.75M12 17.5v3.75m4.25-3.75v3.75");
}

.r41-hxbqt {
  d: path("M4.75 17.5v-12C4.75 4 6 2.75 7.5 2.75S10.25 4 10.25 5.5c0 3.5 2.25 5 5.25 6.75c2.5 1.45 3.75 3.25 3.75 5.25Z");
}
</style><g class="hntgybcog"><path class="r41-hxbqt"/><rect class="jcbg22mos"/><path class="o2gbzzbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:piano"} {...others} />);
}

export default Component;
