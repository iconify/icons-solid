import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lb6s8zsby {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m7.553 7.106l4-2a1 1 0 0 1 .894 0l8 4a.998.998 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a.998.998 0 0 1 0-1.788Z");
}

.v23z8imjm {
  d: path("m12 16.882l7.553-3.776a1 1 0 1 1 .894 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 1 1 .894-1.788Z");
}
</style><g class="cuyn6tgcc"><path class="lb6s8zsby"/><path class="v23z8imjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:layer-bulk-sharp"} {...others} />);
}

export default Component;
