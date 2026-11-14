import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9-7lf7lk {
  d: path("M11.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mdm1iobsd {
  d: path("M9.5 6H18a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18H9.5A3.5 3.5 0 0 1 6 14.5v-5A3.5 3.5 0 0 1 9.5 6m-7 6H6");
}
</style><g class="hntgybcog"><path class="mdm1iobsd"/><path class="d9-7lf7lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mass-spectrometer"} {...others} />);
}

export default Component;
