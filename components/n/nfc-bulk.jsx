import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.qebz58hxe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}

.wv1iizbkm {
  d: path("M7 10c0-.898.572-1.928 1.521-2.089a1.34 1.34 0 0 1 1.186.382L15 13.586V3a1 1 0 0 1 2 0v11c0 .898-.572 1.928-1.521 2.089a1.34 1.34 0 0 1-1.186-.382L9 10.414V21a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="qebz58hxe"/><path class="wv1iizbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:nfc-bulk"} {...others} />);
}

export default Component;
