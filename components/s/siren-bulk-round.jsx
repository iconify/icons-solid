import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.o86y1tw3b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 22H7a3 3 0 1 1 0-6v-3a5 5 0 0 1 10 0v3a3 3 0 1 1 0 6");
}

.uwqmtgb0c {
  d: path("M13 5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-8.293-.707l2 2a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414m16 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a.999.999 0 1 1 1.414 1.414M13 13v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="o86y1tw3b"/><path class="uwqmtgb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:siren-bulk-round"} {...others} />);
}

export default Component;
