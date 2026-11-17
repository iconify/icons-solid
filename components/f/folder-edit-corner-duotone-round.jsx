import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.g0fmtxvmf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 6h7a2 2 0 0 1 2 2h-9a4 4 0 0 0-4 4v8H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5Zm1 15v-3l5-5l3 3l-5 5Z");
}

.qun0k1b4t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h7a2 2 0 0 1 2 2M8 20H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5l2 2m1 15v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="g0fmtxvmf"/><path class="qun0k1b4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-edit-corner-duotone-round"} {...others} />);
}

export default Component;
