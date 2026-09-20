import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6-07zc8p {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm15-2h2.5V8H16zm5.5-1.5v-5H23v5z");
}
</style><path class="t6-07zc8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-6-sharp"} {...others} />);
}

export default Component;
