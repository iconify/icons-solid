import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.h80s962tw {
  d: path("M5 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm16 1a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2ZM5 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 5a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0ZM5 15a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}

.scqhp7bxo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="scqhp7bxo"/><path class="h80s962tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:data-packet-bulk-sharp"} {...others} />);
}

export default Component;
