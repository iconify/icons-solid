import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bey6c-67d {
  d: path("M7 7a5 5 0 0 1 10 0v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0Zm2 10a3 3 0 1 0 6 0v-2a1 1 0 0 1 2 0v2a5 5 0 0 1-10 0v-2a1 1 0 0 1 2 0Z");
}

.cte3ouyfy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 8v8a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="cte3ouyfy"/><path class="bey6c-67d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:link-vertical-bulk-sharp"} {...others} />);
}

export default Component;
