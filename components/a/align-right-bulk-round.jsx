import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.jwmvnhb2i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 3h6a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8m4 10h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 0-8");
}

.s4i9qqr5y {
  d: path("M21 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="jwmvnhb2i"/><path class="s4i9qqr5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-right-bulk-round"} {...others} />);
}

export default Component;
