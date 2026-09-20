import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.julpvkb9y {
  fill: currentColor;
  d: path("m12.039 20.327l-6.181-5.98L4 15.672v-1.22l1.942-1.4l6.145 5.97l4.386-3.523H20v1h-3.173zm.019-8.98L7.683 6.97L4 9.654V8.429l3.767-2.775l4.375 4.375L20 4.346v1.245z");
}
</style><path class="julpvkb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ssid-chart-sharp"} {...others} />);
}

export default Component;
