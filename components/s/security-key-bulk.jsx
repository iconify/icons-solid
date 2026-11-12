import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ufbs_7b3n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.y7wvd8bru {
  d: path("M20 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a1 1 0 0 1 0-2h5v-1h-1a1 1 0 0 1 0-2h1v-1h-5a1 1 0 0 1 0-2Zm-10 5a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="ufbs_7b3n"/><path class="y7wvd8bru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-key-bulk"} {...others} />);
}

export default Component;
