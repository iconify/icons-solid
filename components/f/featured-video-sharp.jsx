import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgc8up6-p {
  fill: currentColor;
  d: path("M5 14h9V7H5zm-3 6V4h20v16z");
}
</style><path class="jgc8up6-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:featured-video-sharp"} {...others} />);
}

export default Component;
