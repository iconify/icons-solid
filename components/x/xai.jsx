import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ydwd7ibnq {
  fill: var(--svg-color--ff253a, #ff253a);
  fill-rule: evenodd;
  d: path("M15.669 16.716H8.332l2.614-4.53L9.17 9.11L3 19.794h18L12 4.206l-1.777 3.078z");
}
</style><path clip-rule="evenodd" class="ydwd7ibnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:xai"} {...others} />);
}

export default Component;
