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

.j2yzaf44i {
  d: path("m12.699 4.368l6.279 3.305a1.5 1.5 0 0 1 0 2.654l-6.279 3.305a1.5 1.5 0 0 1-1.398 0l-6.279-3.305a1.5 1.5 0 0 1 0-2.654l6.279-3.305a1.5 1.5 0 0 1 1.398 0");
}

.ppub1ebcp {
  d: path("M6 11.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-4.5M21.5 9v6");
}
</style><g class="hntgybcog"><path class="j2yzaf44i"/><path class="ppub1ebcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:health-student-plan"} {...others} />);
}

export default Component;
