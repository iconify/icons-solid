import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kgy_edcgj {
  d: path("M11 12v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0m-6 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Z");
}

.xlinu8bdl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14.01 19a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="xlinu8bdl"/><path class="kgy_edcgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-low-bulk-round"} {...others} />);
}

export default Component;
