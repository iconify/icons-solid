import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nyh_zvvft {
  fill: currentColor;
  d: path("M3.689 21L3 20.312L10.312 13H5v-1h7v7h-1v-5.312zM12 12V5h1v5.312L20.312 3l.688.688L13.688 11H19v1z");
}
</style><path class="nyh_zvvft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:close-fullscreen-outline-sharp"} {...others} />);
}

export default Component;
