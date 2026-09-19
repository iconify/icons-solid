import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ybqasgb2p {
  fill: currentColor;
  d: path("M15 2L2.5 13L13 14l-5 7l1 1l12.5-11L11 10l5-7z");
}
</style><path class="ybqasgb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-electric-bolt"} {...others} />);
}

export default Component;
