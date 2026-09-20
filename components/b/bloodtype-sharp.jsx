import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.op78kd3jc {
  fill: currentColor;
  d: path("M6.999 18.937Q5 16.873 5 13.8q0-2.154 1.738-4.765T12 3.308q3.525 3.117 5.262 5.728Q19 11.646 19 13.8q0 3.073-2.002 5.137Q14.994 21 11.996 21t-4.998-2.064M9.5 17.5h5v-1h-5zm2-3h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="op78kd3jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bloodtype-sharp"} {...others} />);
}

export default Component;
