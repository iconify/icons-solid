import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvcsfybdq {
  d: path("M21.7407 10.7191L15.5 18L13.2071 15.7071");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.joslu-vdk {
  stroke-opacity: 0.4;
  d: path("M2.2311 10.7118L7.1667 16L16.7964 5.6823");
}
</style><g class="gp_8x1bzb"><path class="joslu-vdk"/><path class="cvcsfybdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:double-check-sharp-duotone"} {...others} />);
}

export default Component;
