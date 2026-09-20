import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wyjoo7box {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm8.5-2.77h1v-4.7l2.12 2.12l.707-.708L12 9.616l-3.289 3.288l.708.708L11.5 11.53z");
}
</style><path class="wyjoo7box"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:drive-folder-upload-sharp"} {...others} />);
}

export default Component;
