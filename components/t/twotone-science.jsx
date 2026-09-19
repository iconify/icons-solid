import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qouuqye9y {
  fill: currentColor;
  d: path("M20.8 18.4L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6M6 18l5-6.67V6h2v5.33L18 18z");
}

.z_wz-th5w {
  fill: currentColor;
  d: path("M13 6h-2v5.33L6 18h12l-5-6.67z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="z_wz-th5w"/><path class="qouuqye9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-science"} {...others} />);
}

export default Component;
