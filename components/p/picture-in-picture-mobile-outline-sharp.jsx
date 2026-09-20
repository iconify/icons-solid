import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4047eylx {
  fill: currentColor;
  d: path("M19 21H5V3h14zm-1-1V4H6v16zm0-16H6zm-1.038 8.692V5h-5.693v7.692zm-1-1h-3.693V6h3.692z");
}
</style><path class="k4047eylx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-mobile-outline-sharp"} {...others} />);
}

export default Component;
