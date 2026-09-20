import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ctw4cr3yt {
  fill: currentColor;
  d: path("M8.5 8.462h7V6h-7zM3 19v-4.77h3.385v1h1v-1h9.23v1h1v-1H21V19zm0-5.538v-5h4.5V5h9v3.462H21v5h-3.384V12.23h-1v1.23H7.385v-1.23h-1v1.23z");
}
</style><path class="ctw4cr3yt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:home-repair-service-sharp"} {...others} />);
}

export default Component;
