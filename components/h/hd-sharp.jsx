import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hy142wh9r {
  fill: currentColor;
  d: path("M6.616 14.692H7.5v-2h2.616v2H11V9.308h-.885v2.5H7.5v-2.5h-.885zm6.384 0h3.789l.595-.615V9.904l-.596-.596H13zm.885-.884v-3.616H16.5v3.616zM3 19V5h18v14z");
}
</style><path class="hy142wh9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hd-sharp"} {...others} />);
}

export default Component;
