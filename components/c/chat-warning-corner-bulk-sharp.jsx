import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c_bxyol0n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 10H10v7a1 1 0 0 1-1 1H7.414l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lwpf5wbwd {
  d: path("M18 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-.99 2a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="c_bxyol0n"/><path class="lwpf5wbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-warning-corner-bulk-sharp"} {...others} />);
}

export default Component;
