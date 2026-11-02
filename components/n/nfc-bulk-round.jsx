import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.wv1iizbkm {
  d: path("M7 10c0-.898.572-1.928 1.521-2.089a1.34 1.34 0 0 1 1.186.382L15 13.586V3a1 1 0 0 1 2 0v11c0 .898-.572 1.928-1.521 2.089a1.34 1.34 0 0 1-1.186-.382L9 10.414V21a1 1 0 0 1-2 0Z");
}

.yqxcxg4xa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="yqxcxg4xa"/><path class="wv1iizbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:nfc-bulk-round"} {...others} />);
}

export default Component;
