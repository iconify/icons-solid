import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.jpu3ve2nz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 13h3c.763 0 1.479.48 2 1l1 1c.521.52 1.237 1 2 1h2c.763 0 1.479-.48 2-1l1-1c.521-.52 1.237-1 2-1h3v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.kz5g6ac3r {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 7h3c.64 0 1.36.36 2 1l1 1c.64.64 1.36 1 2 1h2c.64 0 1.36-.36 2-1l1-1c.64-.64 1.36-1 2-1h3");
}
</style><g class="ft5dv1b6b"><path class="jpu3ve2nz"/><path class="kz5g6ac3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inbox-duotone"} {...others} />);
}

export default Component;
