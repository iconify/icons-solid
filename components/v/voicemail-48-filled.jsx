import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u-mlih89d {
  fill: currentColor;
  d: path("M19.5 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M32 20.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40h31.5A4.25 4.25 0 0 0 44 35.75v-23.5A4.25 4.25 0 0 0 39.75 8zm12.624 12.5A6 6 0 1 1 16 18h16a6 6 0 1 1-4.874 2.5z");
}
</style><path class="u-mlih89d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:voicemail-48-filled"} {...others} />);
}

export default Component;
