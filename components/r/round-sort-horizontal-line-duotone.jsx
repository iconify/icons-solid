import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aq5i5kwsa {
  stroke-linejoin: round;
  d: path("M8 14.5L16 14.5M13.25 17L16 14.5L13.25 12");
}

.c_dm05blc {
  stroke-linejoin: round;
  d: path("M16 9.5L8 9.5M10.75 12L8 9.5L10.75 7");
}

.doy9q4b5f {
  cx: 12px;
  cy: 12px;
  r: 10px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="c_dm05blc"/><path class="aq5i5kwsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-sort-horizontal-line-duotone"} {...others} />);
}

export default Component;
