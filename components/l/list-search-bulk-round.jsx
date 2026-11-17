import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.tz0lxuigc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m19.321 16.907l2.386 2.386a.999.999 0 1 1-1.414 1.414l-2.386-2.386a3.83 3.83 0 1 1 1.414-1.414m-2.028-.614a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}

.uvuwwobno {
  d: path("M14 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm-5 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="tz0lxuigc"/><path class="uvuwwobno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-search-bulk-round"} {...others} />);
}

export default Component;
