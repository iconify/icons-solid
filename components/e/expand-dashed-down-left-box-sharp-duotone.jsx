import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.boydabcop {
  d: path("M18 10L18 21M14.7071 17.7071L18 21L21.2929 17.7071M14 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skg78etpb {
  stroke-opacity: 0.4;
  d: path("M9 21L5 21M3 19L3 15M5 13L9 13M11 19L11 15");
}
</style><g class="gp_8x1bzb"><path class="boydabcop"/><path class="skg78etpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-down-left-box-sharp-duotone"} {...others} />);
}

export default Component;
