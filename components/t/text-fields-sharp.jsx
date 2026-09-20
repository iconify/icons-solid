import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asdbeh1oc {
  fill: currentColor;
  d: path("M7 20V7H2V4h13v3h-5v13zm9 0v-8h-3V9h9v3h-3v8z");
}
</style><path class="asdbeh1oc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-fields-sharp"} {...others} />);
}

export default Component;
