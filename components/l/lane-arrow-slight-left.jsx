import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnn-3acht {
  d: path("M7 9V4h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im8pqbq2f {
  d: path("M15.5 21v-8.5L7 4");
}
</style><g class="hntgybcog"><path class="im8pqbq2f"/><path class="hnn-3acht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-arrow-slight-left"} {...others} />);
}

export default Component;
