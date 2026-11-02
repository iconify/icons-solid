import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.nyf_if1vp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 13l2 2a1.414 1.414 0 0 1 0 2c-.64.64-1.36 1-2 1H9a3 3 0 0 1-3-3v-2c0-.64.36-1.36 1-2a1.414 1.414 0 0 1 2 0zm0 0l6-6m-2-2l4 4");
}

.u-h9m4_0z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13.707 14.293a2.41 2.41 0 0 1 0 3.414c-.37.37-.791.693-1.26.928A3.26 3.26 0 0 1 11 19H9a4 4 0 0 1-4-4v-2c0-1.039.578-1.992 1.293-2.707a2.41 2.41 0 0 1 3.414 0Z");
}
</style><g class="ft5dv1b6b"><path class="u-h9m4_0z"/><path class="nyf_if1vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shovel-duotone-round"} {...others} />);
}

export default Component;
