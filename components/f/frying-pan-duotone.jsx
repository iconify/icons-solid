import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_amoohkr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h12v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 0l6-3");
}

.ft5dv1b6b {
  fill: none;
}

.po3ai-b8e {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 11v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z");
}
</style><g class="ft5dv1b6b"><path class="po3ai-b8e"/><path class="f_amoohkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frying-pan-duotone"} {...others} />);
}

export default Component;
