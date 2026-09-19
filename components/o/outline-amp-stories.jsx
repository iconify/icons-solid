import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrc_nmb9r {
  fill: currentColor;
  d: path("M7 19h10V4H7zM9 6h6v11H9zM3 6h2v11H3zm16 0h2v11h-2z");
}
</style><path class="hrc_nmb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-amp-stories"} {...others} />);
}

export default Component;
