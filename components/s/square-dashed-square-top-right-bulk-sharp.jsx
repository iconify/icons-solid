import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kcde4pb3j {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z");
}

.xfdwprzgs {
  d: path("M3 2h3a1 1 0 0 1 0 2H4v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m6 12V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1m2-10v9h9V4Zm-7 6v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0M2 21v-3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m19 1h-3a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1m-11-2h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="kcde4pb3j"/><path class="xfdwprzgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-top-right-bulk-sharp"} {...others} />);
}

export default Component;
