import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0dwy-v-a {
  stroke-opacity: 0.4;
  d: path("M11.8907 4L22 4L22 20L11.8907 20");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t618gnb4j {
  d: path("M2.2414 12L13.8907 12M8.1438 6.204L2 12L8.1438 17.796");
}
</style><g class="gp_8x1bzb"><path class="e0dwy-v-a"/><path class="t618gnb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bracket-arrow-left-sharp-two-tone"} {...others} />);
}

export default Component;
