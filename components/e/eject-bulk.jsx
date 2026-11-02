import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cd4xz4odh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4.456 12.41l5-8a3 3 0 0 1 5.088 0l5 8A2.999 2.999 0 0 1 17 17H7a3 3 0 0 1-2.544-4.59");
}

.cuyn6tgcc {
  fill: currentColor;
}

.tm-7tqbxw {
  d: path("M5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="cd4xz4odh"/><path class="tm-7tqbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:eject-bulk"} {...others} />);
}

export default Component;
