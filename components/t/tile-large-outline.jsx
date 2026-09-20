import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iuqa2-b-s {
  fill: currentColor;
  d: path("M4 20v-4.942h6.789V20zm9.173 0v-4.942H20V20zM5 19h4.789v-2.942H5zm9.173 0H19v-2.942h-4.827zM4 12.673V4h16v8.673zm12.596 4.846");
}
</style><path class="iuqa2-b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tile-large-outline"} {...others} />);
}

export default Component;
