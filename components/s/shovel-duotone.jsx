import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkiq4hk_d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 13l2 2a1.414 1.414 0 0 1 0 2l-1 1H8a2 2 0 0 1-2-2v-4l1-1a1.414 1.414 0 0 1 2 0zm0 0l6-6m-2-2l4 4");
}

.ft5dv1b6b {
  fill: none;
}

.rnu935boi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 11l4 4a1.415 1.415 0 0 1 0 2l-1 1H8a2 2 0 0 1-2-2v-4l1-1a1.415 1.415 0 0 1 2 0");
}
</style><g class="ft5dv1b6b"><path class="rnu935boi"/><path class="bkiq4hk_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shovel-duotone"} {...others} />);
}

export default Component;
