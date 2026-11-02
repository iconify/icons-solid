import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiwokebrf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.sc-ep82on {
  d: path("M9 13a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="aiwokebrf"/><path class="sc-ep82on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dumbbell-bulk"} {...others} />);
}

export default Component;
