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

.ipyya2i8f {
  d: path("M5.5 5h13l3 11v3h-19v-3Zm-3 11h19");
}

.m8c6ijb9s {
  d: path("M9 10.5a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="ipyya2i8f"/><path class="m8c6ijb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shower-tray"} {...others} />);
}

export default Component;
