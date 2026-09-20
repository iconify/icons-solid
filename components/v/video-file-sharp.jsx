import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5waeh1cw {
  fill: currentColor;
  d: path("M5 21V3h9.5L19 7.5V21zm9-13h4l-4-4zm-5.5 9.616h5.23v-2.077l1.847.973v-3.024l-1.846.974v-2.077H8.5z");
}
</style><path class="o5waeh1cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-file-sharp"} {...others} />);
}

export default Component;
