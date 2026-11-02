import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ogvb6-pyy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 10v2h2a4 4 0 0 1 0 8h-3a1 1 0 0 1 0-2h3a2 2 0 1 0 0-4h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2Z");
}

.y4tx-xbdi {
  d: path("M4 11h6V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H4v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="ogvb6-pyy"/><path class="y4tx-xbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heading-5-bulk"} {...others} />);
}

export default Component;
