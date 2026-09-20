import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k193bi48h {
  fill: currentColor;
  d: path("M5 19h9v-5h5V5H5zm-1 1V4h16v10.289L14.288 20zm3.885-6.539v-1H12v1zm0-3.961v-1h8.23v1zM5 19V5z");
}
</style><path class="k193bi48h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sticky-note-2-outline-sharp"} {...others} />);
}

export default Component;
