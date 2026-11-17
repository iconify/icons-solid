import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mnlao8blo {
  d: path("M15.171 7H8a1 1 0 0 0-1 1v2a.997.997 0 0 0 1 1h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a1 1 0 0 1 0-2h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h7.171a3 3 0 1 1 0 2");
}

.zjfit0btt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="zjfit0btt"/><path class="mnlao8blo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:route-bulk"} {...others} />);
}

export default Component;
