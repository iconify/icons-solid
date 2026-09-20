import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.taaiy_04e {
  fill: currentColor;
  d: path("m18.825 16l-2-2H20v2zM16 13.175L10.825 8H14V4h2v4h4v2h-4zm-6-6l-2-2V4h2zM19.775 22.6L16 18.825V20h-2v-3.175L13.175 16H10v4H8v-4H4v-2h4v-3.175L7.175 10H4V8h1.175L1.4 4.225L2.8 2.8l18.4 18.4z");
}
</style><path class="taaiy_04e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-3x3-off-outline-sharp"} {...others} />);
}

export default Component;
