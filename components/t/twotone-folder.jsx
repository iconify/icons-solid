import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vp58h1xyx {
  fill: currentColor;
  d: path("m11.17 8l-.58-.59L9.17 6H4v12h16V8h-8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zbvaiin2w {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l1.41 1.41l.59.59H20z");
}
</style><path class="vp58h1xyx"/><path class="zbvaiin2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-folder"} {...others} />);
}

export default Component;
