import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpp7y5g_r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.fo3788bvd {
  d: path("M9 14a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm4-3a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm4-4v9a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="fo3788bvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:kanban-bulk-sharp"} {...others} />);
}

export default Component;
