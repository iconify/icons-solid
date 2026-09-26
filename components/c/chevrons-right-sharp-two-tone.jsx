import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.apnwk70fe {
  stroke-opacity: 0.4;
  d: path("M5.7071 17.2929L11 12L5.7071 6.7071");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ukdu5oalo {
  d: path("M12.7071 17.2929L18 12L12.7071 6.7071");
}
</style><g class="gp_8x1bzb"><path class="apnwk70fe"/><path class="ukdu5oalo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-right-sharp-two-tone"} {...others} />);
}

export default Component;
