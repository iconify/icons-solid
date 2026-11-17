import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dfnh6260u {
  d: path("M7 7h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}

.sj4cbwbpx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 2h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 2");
}
</style><g class="cuyn6tgcc"><path class="sj4cbwbpx"/><path class="dfnh6260u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:air-conditioner-off-bulk-round"} {...others} />);
}

export default Component;
