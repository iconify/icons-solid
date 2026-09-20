import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npw2ncbdv {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h6v-4.27h-5v-1.23h5v-4.27h-6v-1.23h7.23v5.5L15.5 12l.616.616v5.5z");
}
</style><path class="npw2ncbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-3-outline-sharp"} {...others} />);
}

export default Component;
