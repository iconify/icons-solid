import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jbrpz0b3y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 15 15");
}

.oouwqtbjr {
  d: path("M4 16a3 3 0 0 0 3 3h14a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="jbrpz0b3y"/><path class="oouwqtbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bubble-bulk-round"} {...others} />);
}

export default Component;
