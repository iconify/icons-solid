import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjvwrs0gm {
  fill: currentColor;
  d: path("M8.5 19v-6.346L2.45 5h14.1l-6.05 7.654V19zm8.539 0v-2.962h-2.981v-1h2.98v-2.98h1v2.98H21v1h-2.962V19z");
}
</style><path class="bjvwrs0gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:filter-plus-sharp"} {...others} />);
}

export default Component;
