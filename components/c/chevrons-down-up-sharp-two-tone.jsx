import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o019cd_5e {
  stroke-opacity: 0.4;
  d: path("M6.7071 3.7071L12 9L17.2929 3.7071");
}

.p5pdrebjg {
  d: path("M6.7071 20.2929L12 15L17.2929 20.2929");
}
</style><g class="gp_8x1bzb"><path class="o019cd_5e"/><path class="p5pdrebjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-down-up-sharp-two-tone"} {...others} />);
}

export default Component;
