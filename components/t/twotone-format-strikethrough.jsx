import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rewx-801w {
  fill: currentColor;
  d: path("M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z");
}
</style><path class="rewx-801w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-strikethrough"} {...others} />);
}

export default Component;
