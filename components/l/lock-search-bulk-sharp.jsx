import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mrw7wccdy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 8h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1");
}

.zkbh5obew {
  d: path("M17 7v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0V7a5 5 0 0 1 10 0m-3.292 8.293l1.999 2a.999.999 0 1 1-1.414 1.414l-2-1.999a3 3 0 1 1 1.415-1.415M10 14a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="cuyn6tgcc"><path class="mrw7wccdy"/><path class="zkbh5obew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-search-bulk-sharp"} {...others} />);
}

export default Component;
