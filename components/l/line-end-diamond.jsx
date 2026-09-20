import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.smfebfddh {
  fill: currentColor;
  d: path("m15 16.77l-4.27-4.27H3.078v-1h7.654L15 7.23L19.77 12z");
}
</style><path class="smfebfddh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-diamond"} {...others} />);
}

export default Component;
