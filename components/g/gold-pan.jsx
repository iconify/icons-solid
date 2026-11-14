import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g7wz-l0gs {
  d: path("M2.5 10a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrgoypa-q {
  d: path("M3.5 12.25C4.5 17.5 8 19.5 12 19.5s7.5-2 8.5-7.25M9 10h.01m3.49-1h.01m1.99 2.5h.01");
}
</style><g class="hntgybcog"><path class="g7wz-l0gs"/><path class="wrgoypa-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gold-pan"} {...others} />);
}

export default Component;
