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

.uyduxabns {
  d: path("M2.5 11.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.y4ndre54g {
  d: path("M7 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 7.5h11.5v-3.5");
}
</style><g class="hntgybcog"><path class="uyduxabns"/><path class="y4ndre54g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:medical-tape"} {...others} />);
}

export default Component;
