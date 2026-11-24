import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.av4xyibpt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 22H4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a1 1 0 0 1-1 1");
}

.cpctddckd {
  d: path("M9 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm-8 6a3 3 0 1 1 6 0v1h6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h6Zm4 1v-1a1 1 0 0 0-2 0v1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="av4xyibpt"/><path class="cpctddckd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-office-bulk"} {...others} />);
}

export default Component;
