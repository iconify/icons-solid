import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.paq28ebve {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 4h4a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6m10 10h4a3 3 0 1 1 0 6h-4a3 3 0 1 1 0-6");
}

.uowxp16rl {
  d: path("M6 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm0 6h4c1.066 0 2.078.415 2.828 1.172A3.96 3.96 0 0 1 18 15a1 1 0 0 1-2 0a2 2 0 0 0-2-2h-4a3.96 3.96 0 0 1-2.828-1.172A3.96 3.96 0 0 1 6 9a1 1 0 0 1 2 0a2 2 0 0 0 2 2m6 10a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="paq28ebve"/><path class="uowxp16rl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cable-bulk-round"} {...others} />);
}

export default Component;
