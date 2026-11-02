import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0ep4mc0j {
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}

.npixvev1d {
  stroke-opacity: 0.4;
  d: path("m3 13l4-4a2.83 2.83 0 0 1 4 0l2 2a1.414 1.414 0 0 0 2 0l1-1a1.414 1.414 0 0 1 2 0l3 3M3 21h7m4 0h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="npixvev1d"/><path class="m0ep4mc0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gallery-duocolor-round"} {...others} />);
}

export default Component;
