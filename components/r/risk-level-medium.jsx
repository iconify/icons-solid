import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d64wn5aji {
  fill: currentColor;
  d: path("M4.75 14h.5A1.75 1.75 0 0 1 7 15.75v3a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 3 18.75v-3A1.75 1.75 0 0 1 4.75 14m7-4.5h.5A1.75 1.75 0 0 1 14 11.25v7.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 18.75v-7.5a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8yk1mb3s {
  d: path("M18.75 4h.5A1.75 1.75 0 0 1 21 5.75v13a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 17 18.75v-13A1.75 1.75 0 0 1 18.75 4");
}
</style><g class="hntgybcog"><path class="d64wn5aji"/><path class="z8yk1mb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:risk-level-medium"} {...others} />);
}

export default Component;
