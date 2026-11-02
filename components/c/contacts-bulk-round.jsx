import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ca-ggxbuz {
  d: path("M8 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m11-1a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-9 1a2 2 0 1 0 3.999.001A2 2 0 0 0 10 10m9 7a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM7 21a5 5 0 0 1 10 0a1 1 0 0 1-2 0a3 3 0 1 0-6 0a1 1 0 0 1-2 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.zp8yaz5ji {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z");
}
</style><g class="cuyn6tgcc"><path class="zp8yaz5ji"/><path class="ca-ggxbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:contacts-bulk-round"} {...others} />);
}

export default Component;
