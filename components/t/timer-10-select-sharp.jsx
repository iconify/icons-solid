import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ard_noj2v {
  fill: currentColor;
  d: path("M8.923 16.885h4.77v-9.77h-4.77zm-1.23 1.23V5.886h7.23v12.23zm-4 0v-11h-2v-1.23h3.23v12.23zm13.615 0v-1h4v-2h-4v-4h5v1h-4v2h4v4z");
}
</style><path class="ard_noj2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-10-select-sharp"} {...others} />);
}

export default Component;
