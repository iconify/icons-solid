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

.hqdz5970i {
  d: path("M176 208a8 8 0 0 1-8 8H88a8 8 0 0 1-6.4-12.8l71.94-95.92a32 32 0 1 0-51.1-38.53a32.5 32.5 0 0 0-3.78 6.46A8 8 0 1 1 84 68.8a48 48 0 1 1 82.33 48.09L104 200h64a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="hqdz5970i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-two-duotone"} {...others} />);
}

export default Component;
