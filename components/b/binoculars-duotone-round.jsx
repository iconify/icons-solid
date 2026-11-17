import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6zgfgplu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 16a3 3 0 1 0 6 0a3 3 0 0 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6-5h6M3 16c0-3 4-6 4-8V7a1 1 0 0 1 2 0v9m12 0c0-3-4-6-4-8V7a1 1 0 0 0-2 0v9");
}

.ft5dv1b6b {
  fill: none;
}

.z6vasp6lf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 8V7a1 1 0 0 1 2 0v9a3 3 0 1 1-6 0c0-3 4-6 4-8m8 8V7a1 1 0 0 1 2 0v1c0 2 4 5 4 8a3 3 0 1 1-6 0");
}
</style><g class="ft5dv1b6b"><path class="z6vasp6lf"/><path class="d6zgfgplu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:binoculars-duotone-round"} {...others} />);
}

export default Component;
