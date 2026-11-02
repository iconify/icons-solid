import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hn13l6b8j {
  d: path("M7 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m15 0v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}

.sjr9x5bay {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 10a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z");
}
</style><g class="cuyn6tgcc"><path class="sjr9x5bay"/><path class="hn13l6b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:battery-low-bulk-round"} {...others} />);
}

export default Component;
