import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kjgqwe0nk {
  d: path("M6.01 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm3 0a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2ZM12 8h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m3.01 0a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2ZM18 8h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2M6.01 11a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2ZM9 11h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m3.01 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2ZM15 11h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m3.01 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2ZM16 14a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Z");
}

.trdjr4bpx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="trdjr4bpx"/><path class="kjgqwe0nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:keyboard-bulk"} {...others} />);
}

export default Component;
