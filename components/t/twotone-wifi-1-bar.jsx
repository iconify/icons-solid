import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.havp7tbhf {
  fill: currentColor;
  d: path("M15.53 17.46L12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46");
}
</style><path class="havp7tbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-wifi-1-bar"} {...others} />);
}

export default Component;
