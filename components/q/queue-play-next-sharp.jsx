import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8htmcjsm {
  fill: currentColor;
  d: path("M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zm8.5 7.5L18 21l3-3l-3-3l1.5-1.5L24 18zM8 21v-2H2V3h20v9h-5v7h-2v2z");
}
</style><path class="z8htmcjsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:queue-play-next-sharp"} {...others} />);
}

export default Component;
