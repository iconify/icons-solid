import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hj_a7sb7a {
  fill: currentColor;
  d: path("M12 18.5A9.5 9.5 0 0 0 21.5 9H17a5 5 0 0 1-5 5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhf59lrjm {
  d: path("M2.5 5.5V9a9.5 9.5 0 0 0 19 0V5.5H17V9A5 5 0 0 1 7 9V5.5Z");
}
</style><g class="hntgybcog"><path class="uhf59lrjm"/><path class="hj_a7sb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:quadrant-lower-right"} {...others} />);
}

export default Component;
