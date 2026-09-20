import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y2in95bvr {
  fill: currentColor;
  d: path("m9.5 16.5l7-4.5l-7-4.5zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="y2in95bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:slideshow-outline-sharp"} {...others} />);
}

export default Component;
