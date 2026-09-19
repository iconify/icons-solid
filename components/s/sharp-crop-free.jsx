import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-5jqgbhe {
  fill: currentColor;
  d: path("M3 3v6h2V5h4V3zm2 12H3v6h6v-2H5zm14 4h-4v2h6v-6h-2zm2-16h-6v2h4v4h2z");
}
</style><path class="y-5jqgbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-free"} {...others} />);
}

export default Component;
