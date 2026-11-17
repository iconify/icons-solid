import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8lmhfbaq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l5-5a1.414 1.414 0 0 1 2 0l4 4a1.414 1.414 0 0 1 0 2L10 20a1.414 1.414 0 0 1-2 0l-4-4a1.414 1.414 0 0 1 0-2zm-4 4l2 2m2-6l2 2m2-6l2 2");
}

.ft5dv1b6b {
  fill: none;
}

.zz0awxcua {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 4a1.415 1.415 0 0 1 2 0l4 4a1.415 1.415 0 0 1 0 2L10 20a1.415 1.415 0 0 1-2 0l-4-4a1.415 1.415 0 0 1 0-2Z");
}
</style><g class="ft5dv1b6b"><path class="zz0awxcua"/><path class="f8lmhfbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ruler-duotone"} {...others} />);
}

export default Component;
