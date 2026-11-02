import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bb50odo-i {
  d: path("M7 8a1.002 1.002 0 0 1 1.707-.707L15 13.586V3a1 1 0 0 1 2 0v13a1.002 1.002 0 0 1-1.707.707L9 10.414V21a1 1 0 0 1-2 0Z");
}

.bpp7y5g_r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="bb50odo-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:nfc-bulk-sharp"} {...others} />);
}

export default Component;
