import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7ix-fbmf {
  fill: currentColor;
  d: path("M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z");
}
</style><path class="h7ix-fbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-panorama"} {...others} />);
}

export default Component;
