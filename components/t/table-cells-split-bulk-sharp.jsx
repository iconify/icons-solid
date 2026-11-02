import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.pumpzpciy {
  d: path("M20 8a1 1 0 0 1 0 2h-7v4h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7v-4H4a1 1 0 0 1 0-2Z");
}

.xam6kbw8x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="xam6kbw8x"/><path class="pumpzpciy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-split-bulk-sharp"} {...others} />);
}

export default Component;
