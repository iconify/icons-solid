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

.ijbwaabdg {
  d: path("M8 8v3h8V3a1 1 0 0 1 2 0v4h3a1 1 0 0 1 0 2h-3v2h3a1 1 0 0 1 0 2h-3v2h3a1 1 0 0 1 0 2h-3v4a1 1 0 0 1-2 0v-8H8v8a1 1 0 0 1-2 0v-4H3a1 1 0 0 1 0-2h3v-2H3a1 1 0 0 1 0-2h3V9H3a1 1 0 0 1 0-2h3V3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="ijbwaabdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:film-bulk-sharp"} {...others} />);
}

export default Component;
