import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv1xp341z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17h3a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V9h3a1 1 0 0 0 1-1V5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z");
}

.ft5dv1b6b {
  fill: none;
}

.l1-n8v_7b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 17h3a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V9h3a1 1 0 0 0 1-1V5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="ft5dv1b6b"><path class="l1-n8v_7b"/><path class="bv1xp341z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stairs-duotone"} {...others} />);
}

export default Component;
