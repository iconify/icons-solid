import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hy-_s9som {
  d: path("m14.553 10.106l6-3a1 1 0 1 1 .894 1.788l-6 3a1 1 0 1 1-.894-1.788");
}

.o3122ccuj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 10a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="o3122ccuj"/><path class="hy-_s9som"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frying-pan-bulk-round"} {...others} />);
}

export default Component;
