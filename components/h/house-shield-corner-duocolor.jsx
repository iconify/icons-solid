import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggg8arb0z {
  d: path("M8 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0L17.714 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pgpbwyp0g {
  stroke-opacity: 0.4;
  d: path("M17 13h3a1 1 0 0 1 1 1v2c0 2.5-1.5 4-4 5c-2.5-1-4-2.5-4-5v-2a1 1 0 0 1 1-1z");
}
</style><g class="nrj6p8qat"><path class="pgpbwyp0g"/><path class="ggg8arb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-shield-corner-duocolor"} {...others} />);
}

export default Component;
