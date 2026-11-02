import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d0983y84f {
  d: path("M20 5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}

.q7_w5f3zx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 11h3a1 1 0 0 1 0 2H5v1a3 3 0 0 0 3 3a1 1 0 0 1 0 2a5 5 0 0 1-3.536-1.464A4.98 4.98 0 0 1 3 14V6a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="q7_w5f3zx"/><path class="d0983y84f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-tree-bulk-round"} {...others} />);
}

export default Component;
