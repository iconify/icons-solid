import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.k5ct4ktty {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 7l4 4a1.415 1.415 0 0 1 0 2l-3 3h-3l-4 4a1.415 1.415 0 0 1-2 0l-1-1a1.415 1.415 0 0 1 0-2l4-4v-3l3-3a1.415 1.415 0 0 1 2 0");
}

.wegvnsecl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 9l2 2a1.414 1.414 0 0 1 0 2l-3 3h-3l-4 4a1.414 1.414 0 0 1-2 0l-1-1a1.414 1.414 0 0 1 0-2l4-4v-3l3-3a1.414 1.414 0 0 1 2 0zM9 9l6 6");
}
</style><g class="ft5dv1b6b"><path class="k5ct4ktty"/><path class="wegvnsecl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flashlight-off-duotone"} {...others} />);
}

export default Component;
