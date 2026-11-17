import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.h8lumpb0b {
  d: path("M11.715 1.482L12 2L17.5 12L12 22L11.715 22.518M16.215 1.482L16.5 2L22 12L16.5 22L16.215 22.518");
}

.t79znmswb {
  fill: currentColor;
  d: path("M7.5 1C7.865 1 8.2 1.199 8.376 1.519L13.876 11.519C14.041 11.818 14.041 12.182 13.876 12.481L8.376 22.481C8.2 22.801 7.865 23 7.5 23C7.135 23 6.8 22.801 6.624 22.481L1.124 12.481C0.959 12.182 0.959 11.818 1.124 11.519L6.624 1.519L6.697 1.404C6.884 1.152 7.181 1 7.5 1Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="t79znmswb"/><path class="h8lumpb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layers-horizontal-sharp-fill"} {...others} />);
}

export default Component;
