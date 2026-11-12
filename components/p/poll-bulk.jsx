import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dox9e9smu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m0 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.o6gvkm3px {
  d: path("M11 6h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2m0 10h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="dox9e9smu"/><path class="o6gvkm3px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:poll-bulk"} {...others} />);
}

export default Component;
