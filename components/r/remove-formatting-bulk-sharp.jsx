import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ev_5b6boc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m18 14.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L19.414 16l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 17.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L16.586 16l-2.293-2.293a.999.999 0 1 1 1.414-1.414Z");
}

.ss3d290uf {
  d: path("M8 4h5a1 1 0 0 1 0 2H9v13a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="ev_5b6boc"/><path class="ss3d290uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:remove-formatting-bulk-sharp"} {...others} />);
}

export default Component;
