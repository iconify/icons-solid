import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khand1ldd {
  fill: currentColor;
  d: path("M5 19V8.77h3V19zM5 8V5h3v3zm5.52 11l-.02-7.461h3V19zm-.02-8.23v-3h3v3zM16 19v-4.673h3V19zm0-5.442v-3h3v3z");
}
</style><path class="khand1ldd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stacked-bar-chart-outline-sharp"} {...others} />);
}

export default Component;
