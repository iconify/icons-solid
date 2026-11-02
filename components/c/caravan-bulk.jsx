import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gz1qhtbpb {
  d: path("M21 14a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2ZM7.236 16.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}

.y3qoqnupq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2.171a3 3 0 0 1-5.658 0H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3ZM6 9v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m3.293 9.707l.002.002a1 1 0 0 0 1.41 0l.002-.002l.002-.002a1 1 0 0 0-.002-1.412l-.002-.002a1 1 0 0 0-1.41 0l-.002.002l-.002.002a1 1 0 0 0 .002 1.412");
}
</style><g class="cuyn6tgcc"><path class="y3qoqnupq"/><path class="gz1qhtbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:caravan-bulk"} {...others} />);
}

export default Component;
