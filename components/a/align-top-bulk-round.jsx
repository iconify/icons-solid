import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfll5pbhs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 11v6a4 4 0 0 1-8 0v-6a4 4 0 0 1 8 0m10 0v2a4 4 0 0 1-8 0v-2a4 4 0 0 1 8 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.n4vwsnj3k {
  d: path("M3 3h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="cfll5pbhs"/><path class="n4vwsnj3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-top-bulk-round"} {...others} />);
}

export default Component;
