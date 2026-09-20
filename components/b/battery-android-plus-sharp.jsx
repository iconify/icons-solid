import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hy3pwhbph {
  fill: currentColor;
  d: path("M2 17V7h14.116v2.116h-3v5.769h3V17zm16.5-1.5v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="hy3pwhbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-plus-sharp"} {...others} />);
}

export default Component;
