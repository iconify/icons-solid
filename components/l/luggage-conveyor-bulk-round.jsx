import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.eurh3pbzi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Zm-3 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z");
}

.smp9tlbnq {
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1V4h-4v2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V8a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="eurh3pbzi"/><path class="smp9tlbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:luggage-conveyor-bulk-round"} {...others} />);
}

export default Component;
