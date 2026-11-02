import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jvxgz6bla {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 10h3a1 1 0 0 1 0 2h-2v7a1 1 0 0 1-2 0v-7h-2a1 1 0 0 1 0-2Z");
}

.ss3d290uf {
  d: path("M8 4h5a1 1 0 0 1 0 2H9v13a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="jvxgz6bla"/><path class="ss3d290uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-size-bulk-round"} {...others} />);
}

export default Component;
