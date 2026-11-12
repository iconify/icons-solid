import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7cy1bbwm {
  stroke-linejoin: round;
  d: path("M15.5 9L12.5 12L15.5 15");
}

.doy9q4b5f {
  cx: 12px;
  cy: 12px;
  r: 10px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.fa8kidbzr {
  stroke-linejoin: round;
  d: path("M11.5 9L8.5 12L11.5 15");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="b7cy1bbwm"/><path class="fa8kidbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-left-line-duotone"} {...others} />);
}

export default Component;
