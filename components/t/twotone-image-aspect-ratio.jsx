import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8261z8yo {
  fill: currentColor;
  d: path("M4 18h16V6H4zm10-8h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm-4 0h2v2H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.l0l_jrk-l {
  fill: currentColor;
  d: path("M14 10h2v2h-2zm0 4h2v2h-2zm-8-4h2v2H6zm4 0h2v2h-2zm10-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z");
}
</style><path class="c8261z8yo"/><path class="l0l_jrk-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-image-aspect-ratio"} {...others} />);
}

export default Component;
