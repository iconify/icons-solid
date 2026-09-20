import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hidfxz0es {
  d: path("M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qzqu-abhe {
  d: path("M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92A40 40 0 1 0 120 120a8 8 0 0 1-6.4-12.8L152 56H88a8 8 0 0 1 0-16h80a8 8 0 0 1 6.4 12.8l-39.84 53.12A56.1 56.1 0 0 1 176 160");
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="qzqu-abhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-three-duotone"} {...others} />);
}

export default Component;
