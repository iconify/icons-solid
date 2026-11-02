import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.pbmcn0b0l {
  d: path("M5 11a1 1 0 0 1-1-1a8 8 0 0 1 13.657-5.657A7.98 7.98 0 0 1 20 10a1 1 0 0 1-2 0a6 6 0 0 0-1.761-4.247A6 6 0 0 0 6 10a1 1 0 0 1-1 1m12 11h-4a1 1 0 0 1 0-2h4a3.004 3.004 0 0 0 3-3v-2a1 1 0 0 1 2 0v2a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22");
}

.yykf722eo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm13 0a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="yykf722eo"/><path class="pbmcn0b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:headset-bulk-round"} {...others} />);
}

export default Component;
