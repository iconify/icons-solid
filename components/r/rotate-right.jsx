import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6wn4v-tc {
  d: path("M3.5 20A13.5 13.5 0 0 1 17 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lvnpwkv_c {
  d: path("M13.5 3L17 6.5L13.5 10");
}
</style><g class="hntgybcog"><path class="g6wn4v-tc"/><path class="lvnpwkv_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rotate-right"} {...others} />);
}

export default Component;
