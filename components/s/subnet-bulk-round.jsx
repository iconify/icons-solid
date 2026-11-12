import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ktv-e3hgx {
  d: path("M13 11a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm-5.99 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm5 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm5 0a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}

.ntq519b2l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v2a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="ntq519b2l"/><path class="ktv-e3hgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:subnet-bulk-round"} {...others} />);
}

export default Component;
