import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ie6gpq1_k {
  d: path("M12.894 12.553L16.618 20H21a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h11.382l-3.276-6.553a1 1 0 1 1 1.788-.894");
}

.tukm_3_kn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m20.447 9.894l-16 8a1 1 0 0 1-1.341-.447C.649 12.535 2.641 6.562 7.553 4.106c4.912-2.457 10.885-.465 13.341 4.447a1 1 0 0 1-.447 1.341");
}
</style><g class="cuyn6tgcc"><path class="tukm_3_kn"/><path class="ie6gpq1_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:parasol-bulk-sharp"} {...others} />);
}

export default Component;
