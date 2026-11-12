import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.pbezt3bzr {
  d: path("M12.01 6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm-5 5a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM12 11h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m5.01 0a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2ZM12 16h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}

.yqxcxg4xa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="yqxcxg4xa"/><path class="pbezt3bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:border-outer-bulk-round"} {...others} />);
}

export default Component;
