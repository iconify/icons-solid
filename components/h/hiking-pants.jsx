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

.iwsy61scj {
  d: path("M14.5 2.5q.25 4.5 4 5.5");
}

.k1_er-brp {
  d: path("M6 2.5h12l1.5 19H14L12 9l-2 12.5H4.5Z");
}
</style><g class="hntgybcog"><path class="k1_er-brp"/><path class="iwsy61scj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hiking-pants"} {...others} />);
}

export default Component;
