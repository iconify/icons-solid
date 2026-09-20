import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9igppb4g {
  fill: currentColor;
  d: path("M14.885 19v-1H19V6h-4.115V5H20v14zM11.5 21v-2H4V5h7.5V3h1v18zM19 6v12z");
}
</style><path class="x9igppb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-left-outline-sharp"} {...others} />);
}

export default Component;
