import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt1njwy_l {
  d: path("M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.75 7v14.5M15.25 7v14.5m-9.75-6h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vsl3ngbgi {
  d: path("M5.5 21.5v-9a6.5 6.5 0 0 1 13 0v9Z");
}
</style><g class="hntgybcog"><path class="vsl3ngbgi"/><path class="gt1njwy_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bird-cage"} {...others} />);
}

export default Component;
