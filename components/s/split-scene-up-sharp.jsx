import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bg5nmnbrk {
  fill: currentColor;
  d: path("M5 20v-5.115h14V20zm-2-7.5v-1h2V4h14v7.5h2v1z");
}
</style><path class="bg5nmnbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:split-scene-up-sharp"} {...others} />);
}

export default Component;
