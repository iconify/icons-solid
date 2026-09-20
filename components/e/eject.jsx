import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg1qu2bhb {
  fill: currentColor;
  d: path("M5 19v-2h14v2zm.35-4L12 5l6.65 10z");
}
</style><path class="eg1qu2bhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eject"} {...others} />);
}

export default Component;
