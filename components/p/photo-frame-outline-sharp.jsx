import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yclwbzbry {
  fill: currentColor;
  d: path("M4.846 19.423V18H2V5h20v13h-2.846v1.423zM3 17h18V6H3zm3.404-2.5h11.212l-3.5-4.673l-3.116 4l-2.096-2.539zM3 17V6z");
}
</style><path class="yclwbzbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:photo-frame-outline-sharp"} {...others} />);
}

export default Component;
