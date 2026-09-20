import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tid-pwb3b {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.288L19 9.5V20h-5.192v-6.384h-3.616V20z");
}
</style><path class="tid-pwb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:home-sharp"} {...others} />);
}

export default Component;
