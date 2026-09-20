import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pvisqsbvw {
  fill: currentColor;
  d: path("M1 18V6h19.5v12zm2-2h15.5V8H3zm18.5-1.5v-5H23v5zM3 16V8h15.5v8z");
}
</style><path class="pvisqsbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-0-sharp"} {...others} />);
}

export default Component;
