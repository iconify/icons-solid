import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dblygxbvf {
  d: path("M2.75 16.25h18.5M8.5 11.5V8.75a1.5 1.5 0 0 1 1.5-1.5h9");
}

.fe_9b-7cj {
  width: 18.5px;
  height: 9.25px;
  x: 2.75px;
  y: 11.5px;
  rx: 3.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="fe_9b-7cj"/><path class="dblygxbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:curling-stone"} {...others} />);
}

export default Component;
