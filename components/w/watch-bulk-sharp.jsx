import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.oh9hzvbuk {
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V4h-4v4a1 1 0 0 1-2 0Zm5 7v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0m-3 10h4v-4a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0Z");
}

.vkd5_obwx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 12a6 6 0 1 1 12 0a6 6 0 0 1-12 0");
}
</style><g class="cuyn6tgcc"><path class="vkd5_obwx"/><path class="oh9hzvbuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:watch-bulk-sharp"} {...others} />);
}

export default Component;
