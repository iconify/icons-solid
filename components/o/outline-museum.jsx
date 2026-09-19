import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hozlc6d5l {
  fill: currentColor;
  d: path("M22 11V9L12 2L2 9v2h2v9H2v2h20v-2h-2v-9zm-4 9H6V9h12z");
}

.z0jfpcbwl {
  fill: currentColor;
  d: path("m10 14l2 3l2-3v4h2v-7h-2l-2 3l-2-3H8v7h2z");
}
</style><path class="hozlc6d5l"/><path class="z0jfpcbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-museum"} {...others} />);
}

export default Component;
