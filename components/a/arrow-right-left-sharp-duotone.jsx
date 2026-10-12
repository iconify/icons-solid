import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0ytk4b7m {
  d: path("M22 17L3 17M7.2929 21.2929L3 17L7.2929 12.7071");
}

.vrgsg02_k {
  stroke-opacity: 0.4;
  d: path("M2 7L21 7M16.7071 2.7071L21 7L16.7071 11.2929");
}
</style><g class="gp_8x1bzb"><path class="vrgsg02_k"/><path class="r0ytk4b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-right-left-sharp-duotone"} {...others} />);
}

export default Component;
