import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v7irxxbgk {
  fill: currentColor;
  d: path("M3 16V8zm-2 2V6h15v2H3v8h13v2zm17-2v-3h-3v-2h3V8h2v3h3v2h-3v3z");
}
</style><path class="v7irxxbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-plus-outline-sharp"} {...others} />);
}

export default Component;
