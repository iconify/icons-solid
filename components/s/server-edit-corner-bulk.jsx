import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.sowt4_0jd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm8 8v6a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1");
}

.v9zl5jbxr {
  d: path("M7.01 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM12 18c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22h-3a1 1 0 0 1-1-1Zm-4.99-2a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="sowt4_0jd"/><path class="v9zl5jbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-edit-corner-bulk"} {...others} />);
}

export default Component;
