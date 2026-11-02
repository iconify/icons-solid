import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mhfhcxrih {
  d: path("M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2");
}

.w64nktv8n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm-3 6a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="w64nktv8n"/><path class="mhfhcxrih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-filter-bulk-round"} {...others} />);
}

export default Component;
