import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uqw5j-jwl {
  fill: currentColor;
  d: path("M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 16H8V4h8z");
}
</style><path class="uqw5j-jwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:settings-cell"} {...others} />);
}

export default Component;
