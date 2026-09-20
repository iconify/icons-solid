import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5fn2dbjn {
  fill: currentColor;
  d: path("M20 17.189V6H8.812l-1-1H21v13.189zm1.104 5.342L17.573 19H3V5h2l1 1H4v12h12.573L1.881 3.308l.713-.714l19.223 19.223zM5.73 15.885v-1h9.154l1 1zm0-3.385v-1h5.77l1 1zm0-3.384v-1h2.385l1 1zm9.58 3.384h2.958v-1h-3.957zm-3.384-3.384H14.5v-1h-3.573z");
}
</style><path class="l5fn2dbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:text-ad-off-outline-sharp"} {...others} />);
}

export default Component;
