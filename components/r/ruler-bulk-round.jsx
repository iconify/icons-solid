import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.e3vp32bsy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m8.293 8.293l4-4a3.83 3.83 0 0 1 5.414 0l2 2a3.83 3.83 0 0 1 0 5.414l-8 8a3.83 3.83 0 0 1-5.414 0l-2-2a3.83 3.83 0 0 1 0-5.414Z");
}

.owjh7hb_g {
  d: path("M15.707 6.293a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Zm-4 4a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Zm-4 4a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="e3vp32bsy"/><path class="owjh7hb_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ruler-bulk-round"} {...others} />);
}

export default Component;
