import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ehoa_k8uf {
  d: path("M11 19a1 1 0 0 0 2 0v-8a1 1 0 0 1 2 0v8a3 3 0 1 1-6 0v-8a1 1 0 0 1 2 0Z");
}

.ve71b7bqv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 12h-5v7a3 3 0 1 1-6 0v-7H4a1 1 0 0 1-1-1a9 9 0 0 1 9-9a9 9 0 0 1 9 9a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="ve71b7bqv"/><path class="ehoa_k8uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mushroom-bulk-round"} {...others} />);
}

export default Component;
