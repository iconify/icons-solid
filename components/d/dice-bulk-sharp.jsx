import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b80t65kam {
  d: path("M8.01 7a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm8 0a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2ZM12 11h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m-3.99 4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2ZM16 15h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2");
}

.bpp7y5g_r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="b80t65kam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dice-bulk-sharp"} {...others} />);
}

export default Component;
