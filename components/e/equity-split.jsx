import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gk4ff154h {
  d: path("M13.25 10.75v-8a8 8 0 0 1 8 8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yshkx3bnp {
  d: path("M10.5 13.5v-8a8 8 0 1 0 8 8Z");
}
</style><g class="hntgybcog"><path class="yshkx3bnp"/><path class="gk4ff154h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:equity-split"} {...others} />);
}

export default Component;
