import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j21bw5e7j {
  d: path("M15 4L23 4");
}

.zamthyb_j {
  stroke-opacity: 0.4;
  d: path("M3 12L23 12M1 20L15 20");
}
</style><g class="gp_8x1bzb"><path class="zamthyb_j"/><path class="j21bw5e7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-bottom-sharp-duotone"} {...others} />);
}

export default Component;
