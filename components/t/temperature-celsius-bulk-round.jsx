import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.f0ldmmbbm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.236 5.832A3 3 0 1 1 7.763 8.17a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}

.nuutkyboq {
  d: path("M18 6h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2a1 1 0 0 1 2 0a3.98 3.98 0 0 1-1.172 2.828A3.98 3.98 0 0 1 18 20h-2a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h2c1.064 0 2.078.418 2.828 1.172A3.98 3.98 0 0 1 22 8a1 1 0 0 1-2 0a2 2 0 0 0-2-2");
}
</style><g class="cuyn6tgcc"><path class="f0ldmmbbm"/><path class="nuutkyboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:temperature-celsius-bulk-round"} {...others} />);
}

export default Component;
