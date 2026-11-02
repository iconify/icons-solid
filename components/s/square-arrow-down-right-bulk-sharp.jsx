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

.rqcrlogdz {
  d: path("M11 16a1 1 0 0 1 0-2h1.586L8.293 9.707a.999.999 0 1 1 1.414-1.414L14 12.586V11a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="rqcrlogdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-arrow-down-right-bulk-sharp"} {...others} />);
}

export default Component;
