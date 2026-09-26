import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cns2o9bas {
  d: path("M21 21H3V5H5M6 11H11M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p4wy9ccqg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 4H3C2.4477 4 2 4.4477 2 5V21C2 21.5523 2.4477 22 3 22H22L4 4ZM7.6569 4H21C21.5523 4 22 4.4477 22 5V18.3431L7.6569 4Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="p4wy9ccqg"/><path class="cns2o9bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-off-sharp-two-tone"} {...others} />);
}

export default Component;
