import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pgf58j54v {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM15 3L15 21M7.7071 8.7071L11 12L7.7071 15.2929");
}

.sxlo5xbvt {
  fill: currentColor;
  d: path("M15 3L21 3L21 21L15 21L15 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="sxlo5xbvt"/><path class="pgf58j54v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-right-close-sharp-fill"} {...others} />);
}

export default Component;
