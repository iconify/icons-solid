import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhbal1bbq {
  fill: currentColor;
  d: path("M21 18.189L11.812 9H21zM14 6.616V4H6.812l-1-1H15v3.616zm6.287 15.098L19.573 21H9V10.427l-5-5V14h2.616v1H3V4.427l-.713-.713L3 3l18 18z");
}
</style><path class="yhbal1bbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stack-off-sharp"} {...others} />);
}

export default Component;
