import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ci1x_rbrb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 16a3 3 0 0 0 3 3h14a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V4a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.wdi_wfbtz {
  d: path("M13 7a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm4 4a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2Zm3 6h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="ci1x_rbrb"/><path class="wdi_wfbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-gantt-bulk-round"} {...others} />);
}

export default Component;
