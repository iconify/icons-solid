import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.n_7pgf3-w {
  d: path("M10 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0m6-1V3a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-5.171a3 3 0 1 1 0-2Zm-3.829 8H8v5a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1h5.171a3 3 0 1 1 0 2M14 15a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="n_7pgf3-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circuit-board-bulk-sharp"} {...others} />);
}

export default Component;
