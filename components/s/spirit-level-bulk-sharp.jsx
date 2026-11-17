import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jv9_svena {
  d: path("M8 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m10 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-7-4h2a2 2 0 1 1 0 4h-2a2 2 0 1 1 0-4");
}

.zuq7nzbyd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="zuq7nzbyd"/><path class="jv9_svena"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:spirit-level-bulk-sharp"} {...others} />);
}

export default Component;
