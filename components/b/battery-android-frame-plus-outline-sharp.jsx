import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uwx89utoi {
  fill: currentColor;
  d: path("M2 17V7h14.116v1H3v8h13.116v1zm16.5-1.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-14.115-.885v-5.23h8.73v5.23z");
}
</style><path class="uwx89utoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-frame-plus-outline-sharp"} {...others} />);
}

export default Component;
