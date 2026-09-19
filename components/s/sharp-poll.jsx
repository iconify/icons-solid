import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcqia5evy {
  fill: currentColor;
  d: path("M3 3v18h18V3zm6 14H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z");
}
</style><path class="dcqia5evy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-poll"} {...others} />);
}

export default Component;
