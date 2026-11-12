import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvl8pfblv {
  d: path("M17 2h4a1 1 0 0 1 0 2h-4C9.82 4 4 9.82 4 17v4a1 1 0 0 1-2 0v-4C2 8.716 8.716 2 17 2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ua86zjbnu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="ua86zjbnu"/><path class="bvl8pfblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:corner-radius-bulk-round"} {...others} />);
}

export default Component;
