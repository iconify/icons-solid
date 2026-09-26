import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pipuo_b0d {
  stroke-opacity: 0.4;
  d: path("M3 13L3 6L21 6M17.7071 2.7071L21 6L17.7071 9.2929");
}

.r1_5jubgn {
  d: path("M21 11L21 18L3 18M6.2929 21.2929L3 18L6.2929 14.7071");
}
</style><g class="gp_8x1bzb"><path class="pipuo_b0d"/><path class="r1_5jubgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:repeat-sharp-duotone"} {...others} />);
}

export default Component;
