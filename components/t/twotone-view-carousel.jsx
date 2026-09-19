import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rjel2mb-r {
  fill: currentColor;
  d: path("M2 7h4v10H2zm5 12h10V5H7zM9 7h6v10H9zm9 0h4v10h-4z");
}

.zdbjo-bzb {
  fill: currentColor;
  d: path("M9 7h6v10H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="zdbjo-bzb"/><path class="rjel2mb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-carousel"} {...others} />);
}

export default Component;
