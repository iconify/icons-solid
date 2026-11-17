import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.imb_sqbzq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m2.293 17.293l7-7A1 1 0 0 1 10 10h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1.002 1.002 0 0 1-.707-1.707");
}

.k-guyyfgd {
  d: path("M14 11V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V7h-4v4a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="imb_sqbzq"/><path class="k-guyyfgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:iron-bulk-sharp"} {...others} />);
}

export default Component;
