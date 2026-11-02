import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jb35w8bqn {
  d: path("M13 18a1 1 0 0 1-2 0v-5H3a1 1 0 0 1 0-2h8V6a1 1 0 0 1 2 0v5h8a1 1 0 0 1 0 2h-8Z");
}

.s_79-200p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m2.89 6.006l18-2A1 1 0 0 1 22 5v14a1 1 0 0 1-1.11.994l-18-2A1 1 0 0 1 2 17V7a1 1 0 0 1 .89-.994");
}
</style><g class="cuyn6tgcc"><path class="s_79-200p"/><path class="jb35w8bqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:windows-logo-bulk-sharp"} {...others} />);
}

export default Component;
