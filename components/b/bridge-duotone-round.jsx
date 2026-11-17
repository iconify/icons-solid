import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.k3-fyvbkf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h5a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a4 4 0 1 0-8 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4z");
}

.nurc8bb8i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 6h10a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a4 4 0 0 0-8 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4");
}
</style><g class="ft5dv1b6b"><path class="nurc8bb8i"/><path class="k3-fyvbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bridge-duotone-round"} {...others} />);
}

export default Component;
