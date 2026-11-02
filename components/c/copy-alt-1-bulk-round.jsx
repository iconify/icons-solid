import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jmt4czbii {
  d: path("M8 7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2a1 1 0 0 1 0-2h2a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0Z");
}

.r39aklkqn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 13a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="r39aklkqn"/><path class="jmt4czbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-alt-1-bulk-round"} {...others} />);
}

export default Component;
