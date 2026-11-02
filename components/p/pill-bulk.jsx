import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fohqncbib {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-4 4a5.243 5.243 0 0 1-7.414-7.414Z");
}

.mh1v9pjbx {
  d: path("m8.293 8.293l4-4a5.24 5.24 0 0 1 8.771 2.35a5.24 5.24 0 0 1-1.357 5.064l-4 4a.999.999 0 1 1-1.414-1.414l4-4a3.242 3.242 0 0 0-4.586-4.586l-4 4a.999.999 0 1 1-1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="fohqncbib"/><path class="mh1v9pjbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pill-bulk"} {...others} />);
}

export default Component;
