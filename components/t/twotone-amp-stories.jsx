import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrc_nmb9r {
  fill: currentColor;
  d: path("M7 19h10V4H7zM9 6h6v11H9zM3 6h2v11H3zm16 0h2v11h-2z");
}

.svq6l8dcn {
  fill: currentColor;
  d: path("M9 6h6v11H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="svq6l8dcn"/><path class="hrc_nmb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-amp-stories"} {...others} />);
}

export default Component;
