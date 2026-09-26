import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uwialcivp {
  d: path("M7 21L7 15");
}

.w6vt9xnjt {
  fill: currentColor;
  d: path("M1 19L3 19L3 21L1 21Z");
  stroke: none;
}

.wf5wyrz5c {
  stroke-opacity: 0.4;
  d: path("M12 21L12 11M17 21L17 7M22 21L22 3");
}
</style><g class="gp_8x1bzb"><path class="uwialcivp"/><path class="wf5wyrz5c"/><path class="w6vt9xnjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-low-sharp-two-tone"} {...others} />);
}

export default Component;
