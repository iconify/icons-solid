import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.at2mhibzt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 6h8a5 5 0 0 1 5 5v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a5 5 0 0 1 5-5");
}

.cuyn6tgcc {
  fill: currentColor;
}

.igd4b1bcc {
  d: path("M9 4a2 2 0 0 1 2-2h2.001A2 2 0 0 1 15 4v3a1 1 0 0 1-2 0V4h-2v3a1 1 0 0 1-2 0Zm7 6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2ZM7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0v-4H9v4a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="at2mhibzt"/><path class="igd4b1bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:backpack-bulk"} {...others} />);
}

export default Component;
