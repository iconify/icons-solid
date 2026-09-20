import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jj431tx8l {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm11-2h6.5V8H12zm9.5-1.5v-5H23v5z");
}
</style><path class="jj431tx8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-4-outline-sharp"} {...others} />);
}

export default Component;
