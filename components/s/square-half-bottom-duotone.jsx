import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ktr5rybou {
  d: path("M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xkk65cb_x {
  d: path("M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm0 144H56v-64h144z");
}
</style><g class="cuyn6tgcc"><path class="ktr5rybou"/><path class="xkk65cb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-half-bottom-duotone"} {...others} />);
}

export default Component;
