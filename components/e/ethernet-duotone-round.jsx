import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwwloobct {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3H5a2 2 0 0 1-2-2V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7a2 2 0 0 1-2 2h-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.z28657ynh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3H5a2 2 0 0 1-2-2V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7a2 2 0 0 1-2 2zM6 8v3m4-3v3m4-3v3m4-3v3");
}
</style><g class="ft5dv1b6b"><path class="bwwloobct"/><path class="z28657ynh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ethernet-duotone-round"} {...others} />);
}

export default Component;
