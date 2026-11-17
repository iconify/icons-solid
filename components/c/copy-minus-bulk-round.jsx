import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4bh2hj8g {
  d: path("M4 9v8a3 3 0 0 0 3 3h8a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V9a1 1 0 0 1 2 0m7 0h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lwdgl7bfy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="lwdgl7bfy"/><path class="a4bh2hj8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-minus-bulk-round"} {...others} />);
}

export default Component;
