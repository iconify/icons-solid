import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.nnuo3c1bk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m5.852 5.397l7 4.5a2.5 2.5 0 0 1 0 4.206l-7 4.5A2.5 2.5 0 0 1 2 16.5v-9a2.498 2.498 0 0 1 3.852-2.103");
}

.uzrt0fbtk {
  d: path("M18 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m4 0v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="nnuo3c1bk"/><path class="uzrt0fbtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:play-pause-bulk"} {...others} />);
}

export default Component;
