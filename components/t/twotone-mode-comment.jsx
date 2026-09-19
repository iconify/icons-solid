import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gsz4t6bvt {
  fill: currentColor;
  d: path("M4 4v12h14.83L20 17.17V4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pq8sdfdop {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.17L18.83 16H4V4h16z");
}
</style><path class="pq8sdfdop"/><path class="gsz4t6bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-mode-comment"} {...others} />);
}

export default Component;
