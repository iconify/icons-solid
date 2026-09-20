import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.in2hs_b8r {
  fill: currentColor;
  d: path("m10 14l6-4l-6-4zm-8 8V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="in2hs_b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-read-play-outline-sharp"} {...others} />);
}

export default Component;
