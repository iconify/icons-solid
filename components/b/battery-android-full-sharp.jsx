import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i4e6nwbag {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm20.5-3.5v-5H23v5z");
}
</style><path class="i4e6nwbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-full-sharp"} {...others} />);
}

export default Component;
