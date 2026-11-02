import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.j_bchd9xr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m9.553 6.106l6-3a3.234 3.234 0 0 1 4.341 1.447a3.234 3.234 0 0 1-1.447 4.341l-10 5a3.236 3.236 0 1 1-2.894-5.788Z");
}

.lznbccc_s {
  d: path("M16.894 8.553a1 1 0 1 1-1.788.894l-2-4a1 1 0 1 1 1.788-.894ZM12 13.236l-4.106 8.211a1 1 0 1 1-1.788-.894l5-10a1 1 0 0 1 .446-.447h.001a1 1 0 0 1 1.341.447l5 10a1 1 0 1 1-1.788.894Z");
}
</style><g class="cuyn6tgcc"><path class="j_bchd9xr"/><path class="lznbccc_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:telescope-bulk"} {...others} />);
}

export default Component;
