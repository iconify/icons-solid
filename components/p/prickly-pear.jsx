import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hi79qvjxr {
  fill: currentColor;
  d: path("M17.5 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ir_nngbpr {
  d: path("M8 15.75a4 5.75 0 1 0 8 0a4 5.75 0 1 0-8 0");
}

.ixqpe2b8h {
  d: path("M13.5 6.5a2.5 4 0 1 0 5 0a2.5 4 0 1 0-5 0m-9.25 3.75a2.25 3.5 0 1 0 4.5 0a2.25 3.5 0 1 0-4.5 0");
}

.kkim5ibmm {
  d: path("M10.75 14.5h.01m2.49 3.5h.01");
}
</style><g class="hntgybcog"><path class="ir_nngbpr"/><path class="ixqpe2b8h"/><path class="hi79qvjxr"/><path class="kkim5ibmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:prickly-pear"} {...others} />);
}

export default Component;
