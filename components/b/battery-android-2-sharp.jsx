import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlwby3b8d {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm7-2h10.5V8H8zm13.5-1.5v-5H23v5z");
}
</style><path class="jlwby3b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-2-sharp"} {...others} />);
}

export default Component;
