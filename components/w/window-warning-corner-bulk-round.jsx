import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.db4np_a7j {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 9h-9a3 3 0 0 0-3 3v8a1 1 0 0 1-1 1H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10c1.33 0 2.597.522 3.536 1.464A5 5 0 0 1 22 8a1 1 0 0 1-1 1");
}

.dh66chbzf {
  d: path("M3 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m15 7v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m-1 6h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="db4np_a7j"/><path class="dh66chbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-warning-corner-bulk-round"} {...others} />);
}

export default Component;
