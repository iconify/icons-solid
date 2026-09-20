import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfeig5b2b {
  fill: currentColor;
  d: path("M8.5 11.5h7v-1h-7zm0-4h7v-1h-7zM19 20.07l-4.275-5.57H5V3h14zM5 21v-5.5h9.25l4.216 5.5z");
}
</style><path class="yfeig5b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lab-profile-sharp"} {...others} />);
}

export default Component;
