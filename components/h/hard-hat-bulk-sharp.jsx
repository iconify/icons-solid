import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bmu9nf3kz {
  d: path("M11 7.25V11a1 1 0 0 1-2 0V7.25a1 1 0 0 1 2 0M13 11V7.25a1 1 0 0 1 2 0V11a1 1 0 0 1-2 0M3 15h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.i94-lobke {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 15a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-4a6.01 6.01 0 0 1 5-5.918V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.082A6.01 6.01 0 0 1 20 11v4Z");
}
</style><g class="cuyn6tgcc"><path class="i94-lobke"/><path class="bmu9nf3kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hard-hat-bulk-sharp"} {...others} />);
}

export default Component;
