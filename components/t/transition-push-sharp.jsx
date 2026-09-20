import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wh0ppmbrf {
  fill: currentColor;
  d: path("M8 20v-1.975h2V6H8V4h4v16zm6 0V4h9v16zm-9-4l-1.425-1.4L5.15 13H1v-2h4.15L3.575 9.425L5 8l4 4z");
}
</style><path class="wh0ppmbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:transition-push-sharp"} {...others} />);
}

export default Component;
