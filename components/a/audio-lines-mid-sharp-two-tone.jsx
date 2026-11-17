import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nvb4_rb6q {
  stroke-opacity: 0.4;
  d: path("M8 7V17M16 9V15");
}

.p0-yv_beu {
  d: path("M4 9.5V14.5M12 4V20M20 9.5V14.5");
}
</style><g class="gp_8x1bzb"><path class="nvb4_rb6q"/><path class="p0-yv_beu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-mid-sharp-two-tone"} {...others} />);
}

export default Component;
