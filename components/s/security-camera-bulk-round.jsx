import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_y186mvb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.048 10.363a4 4 0 0 1 2.828-4.899l9.66-2.588a4 4 0 0 1 4.899 2.829l.517 1.932a4 4 0 0 1-2.828 4.899l-9.66 2.588a4 4 0 0 1-4.899-2.829Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.h_4kdmbmy {
  d: path("m16.571 6.74l.518 1.932a1 1 0 0 1-1.932.518l-.518-1.932a1 1 0 0 1 1.932-.518M13 13.141V16h5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-3h-6a1 1 0 0 1-1-1v-3.859a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="a_y186mvb"/><path class="h_4kdmbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-camera-bulk-round"} {...others} />);
}

export default Component;
