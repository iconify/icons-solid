import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jwhyydb2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.438 19.429v10.434L24 22.218l-7.438 7.748V19.43c.31-9.918 14.566-9.918 14.876 0M24 43.5V31.929m-5.785 5.786h11.57m-8.058 2.272l4.546-4.442m-4.546 0l4.546 4.442");
}

.th_4_mbmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.227 39.987V19.222c.826-19.63 28.72-19.63 29.546 0v20.766");
}
</style><path class="th_4_mbmw"/><path class="jwhyydb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wonderous"} {...others} />);
}

export default Component;
