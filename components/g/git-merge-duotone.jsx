import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.oc6btbc2m {
  d: path("M104 56a24 24 0 1 1-24-24a24 24 0 0 1 24 24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tym2560jc {
  d: path("M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M64 56a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 144a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><g class="cuyn6tgcc"><path class="oc6btbc2m"/><path class="tym2560jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:git-merge-duotone"} {...others} />);
}

export default Component;
