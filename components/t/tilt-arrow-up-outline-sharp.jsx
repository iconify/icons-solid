import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j3nl0obvx {
  fill: currentColor;
  d: path("M2 21L6 3h12l4 18zm2.5-2h15L16.4 5H7.6zm6.5-7.175V16h2v-4.175l1.6 1.575L16 12l-4-4l-4 4l1.4 1.425zM19.5 19h-15z");
}
</style><path class="j3nl0obvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tilt-arrow-up-outline-sharp"} {...others} />);
}

export default Component;
