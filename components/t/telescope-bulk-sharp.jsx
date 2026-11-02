import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lznbccc_s {
  d: path("M16.894 8.553a1 1 0 1 1-1.788.894l-2-4a1 1 0 1 1 1.788-.894ZM12 13.236l-4.106 8.211a1 1 0 1 1-1.788-.894l5-10a1 1 0 0 1 .446-.447h.001a1 1 0 0 1 1.341.447l5 10a1 1 0 1 1-1.788.894Z");
}

.yoi-6de4i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m3.553 9.106l14-7a1 1 0 0 1 1.341.447l2 4a1 1 0 0 1-.447 1.341l-14 7a1 1 0 0 1-1.341-.447l-2-4a1 1 0 0 1 .447-1.341");
}
</style><g class="cuyn6tgcc"><path class="yoi-6de4i"/><path class="lznbccc_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:telescope-bulk-sharp"} {...others} />);
}

export default Component;
