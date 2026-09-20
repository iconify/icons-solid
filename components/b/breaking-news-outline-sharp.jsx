import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j96v-hb0x {
  fill: currentColor;
  d: path("M6 17h2v-2H6zm0-4h2V7H6zm5 4h7v-2h-7zm0-4h7v-2h-7zm0-4h7V7h-7zM2 21V3h20v18zm2-2h16V5H4zm0 0V5z");
}
</style><path class="j96v-hb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:breaking-news-outline-sharp"} {...others} />);
}

export default Component;
