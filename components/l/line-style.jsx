import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzd357bxy {
  fill: currentColor;
  d: path("M5.5 18.27v-1h1v1zm0-3v-1h3.327v1zm0-3v-1H11v1zm0-3V5.73h13v3.54zm3 9v-1h1v1zm1.827-3v-1h3.327v1zm1.173 3v-1h1v1zm1.5-6v-1h5.5v1zm1.5 6v-1h1v1zm.654-3v-1H18.5v1zm2.346 3v-1h1v1z");
}
</style><path class="lzd357bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-style"} {...others} />);
}

export default Component;
