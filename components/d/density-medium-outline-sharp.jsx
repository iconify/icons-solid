import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhreoxb4k {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-7.5v-1h16v1zM4 5V4h16v1z");
}
</style><path class="yhreoxb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:density-medium-outline-sharp"} {...others} />);
}

export default Component;
