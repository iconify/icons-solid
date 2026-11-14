import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gc556ubmm {
  d: path("M7.5 4.5V16h5v-5.5m8.75 5.25A2.25 2.25 0 1 1 19 13.5m-1.5 3.75l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwztzqa1i {
  d: path("M2.5 4.5h8a2 2 0 0 1 2 2v4h9");
}
</style><g class="hntgybcog"><path class="lwztzqa1i"/><path class="gc556ubmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kerb-repair"} {...others} />);
}

export default Component;
