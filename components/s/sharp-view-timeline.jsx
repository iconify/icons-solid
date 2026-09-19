import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2sifu3ru {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-9 14H6v-2h6zm3-4H9v-2h6zm3-4h-6V7h6z");
}
</style><path class="b2sifu3ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-timeline"} {...others} />);
}

export default Component;
