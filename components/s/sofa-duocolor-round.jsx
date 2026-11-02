import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5r6qnv9g {
  stroke-opacity: 0.4;
  d: path("M5 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4");
}

.lc_4mrm0h {
  d: path("M3 11v2a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2a2 2 0 1 0-4 0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2a2 2 0 1 0-4 0m2 6v2m14-2v2M12 5v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l5r6qnv9g"/><path class="lc_4mrm0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sofa-duocolor-round"} {...others} />);
}

export default Component;
