import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hag7awbyq {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h6v-4.27h-6v-6.73h7.23v1.23h-6v4.27h6v6.73z");
}
</style><path class="hag7awbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-5-shutter-outline-sharp"} {...others} />);
}

export default Component;
