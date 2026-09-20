import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d6jqd2bqc {
  d: path("M208 80h-72V48a8 8 0 0 0-16 0v32H48a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h72v32a8 8 0 0 0 16 0v-32h72a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 80H48V96h160z");
}

.j3capmbiu {
  d: path("M216 96v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="j3capmbiu"/><path class="d6jqd2bqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-center-horizontal-simple-duotone"} {...others} />);
}

export default Component;
