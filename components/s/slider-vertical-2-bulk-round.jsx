import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.il8_u6bks {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 5a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6 6a3 3 0 1 1 0 6a3 3 0 0 1 0-6");
}

.qaihx02-f {
  d: path("M7 3v5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m6 11a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6-8a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm0 4v11a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0M7 12v9a1 1 0 0 1-2 0v-9a1 1 0 0 1 2 0m6 6v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="il8_u6bks"/><path class="qaihx02-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-vertical-2-bulk-round"} {...others} />);
}

export default Component;
