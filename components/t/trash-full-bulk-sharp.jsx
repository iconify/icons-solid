import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.g6966hetx {
  d: path("M7 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h3a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h3Zm8 2V4H9v1Zm-4 5v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0m4 0v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0");
}

.kkpgl-buz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm4 4v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0m4 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0");
}
</style><g class="cuyn6tgcc"><path class="kkpgl-buz"/><path class="g6966hetx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-full-bulk-sharp"} {...others} />);
}

export default Component;
