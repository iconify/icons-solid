import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.btm9xbczx {
  fill: currentColor;
  d: path("m21 18.189l-1-1V10h-7.188l-1-1H21zM14 6.616V4H6.812l-1-1H15v3.616zM10 20h8.573L10 11.427zm10.287 1.714L19.573 21H9V10.427l-5-5V14h2.616v1H3V4.427l-.713-.713L3 3l18 18zm-6-6");
}
</style><path class="btm9xbczx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stack-off-outline-sharp"} {...others} />);
}

export default Component;
