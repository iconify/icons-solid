import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qd5wnvypl {
  fill: currentColor;
  d: path("M12.192 18v-3.808H20V18zM4 9.808V6h6.808v3.808zM4 18v-3.808h3.808V18zm7.192 1H21v-5.808h-9.808zM3 10.808h8.808V5H3zM3 19h5.808v-5.808H3zm14-8.192v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="qd5wnvypl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:apps-plus-outline"} {...others} />);
}

export default Component;
