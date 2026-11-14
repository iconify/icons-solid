import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq1iv4bjw {
  d: path("m5 3l-2 9.5h18L19 3m-7 9.5v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzkeu33dv {
  d: path("M7.625 3h8.75A2.625 2.625 0 0 1 19 5.625v13.25a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 18.875V5.625A2.625 2.625 0 0 1 7.625 3");
}
</style><g class="hntgybcog"><path class="uzkeu33dv"/><path class="fq1iv4bjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:window-awning"} {...others} />);
}

export default Component;
