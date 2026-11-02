import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.wz_3ew2hq {
  d: path("M16 6v1a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0M5 9h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m11 5v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0");
}

.z-5yhbcwi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="z-5yhbcwi"/><path class="wz_3ew2hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fridge-bulk-round"} {...others} />);
}

export default Component;
