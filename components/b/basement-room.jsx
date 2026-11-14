import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b4g00i8zc {
  d: path("M6.5 4.5v3.75H10V12h3.5v3.75H17v3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yah95j4iv {
  d: path("M2 4.5h20m-18.5 0v15h17v-15");
}
</style><g class="hntgybcog"><path class="yah95j4iv"/><path class="b4g00i8zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:basement-room"} {...others} />);
}

export default Component;
