import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ftwsh098i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.664 5.504l6 4a2.998 2.998 0 0 1 0 4.992l-6 4A3 3 0 0 1 2 16V8a3 3 0 0 1 4.664-2.496");
}

.uzrt0fbtk {
  d: path("M18 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m4 0v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="ftwsh098i"/><path class="uzrt0fbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-pause-bulk-round"} {...others} />);
}

export default Component;
