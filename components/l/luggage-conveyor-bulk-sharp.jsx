import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hzgsokbpk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 6h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 16h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1");
}

.smp9tlbnq {
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1V4h-4v2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="hzgsokbpk"/><path class="smp9tlbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:luggage-conveyor-bulk-sharp"} {...others} />);
}

export default Component;
