import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w1kp8156m {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.27l7 5.27V20zm3.539-3.384h5.23v-2.077l1.846.973v-3.023l-1.846.973v-2.077H8.54z");
}
</style><path class="w1kp8156m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:camera-indoor-sharp"} {...others} />);
}

export default Component;
