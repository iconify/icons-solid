import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bc0ft1biw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 21H5a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v13a1 1 0 0 1-1 1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.eo5h4kbui {
  d: path("M8 19v-3c0-1.317.335-2.749 1.293-3.707l2-2a3.83 3.83 0 0 1 5.414 0l2 2C19.665 13.251 20 14.687 20 16v3h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm2 0h8v-3c0-.742-.15-1.736-.707-2.293l-2-2a1.83 1.83 0 0 0-2.586 0l-2 2C10.152 14.262 10 15.249 10 16Z");
}
</style><g class="cuyn6tgcc"><path class="bc0ft1biw"/><path class="eo5h4kbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-1-bulk-round"} {...others} />);
}

export default Component;
