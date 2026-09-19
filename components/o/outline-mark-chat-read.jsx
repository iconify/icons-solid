import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ck8wqu08j {
  fill: currentColor;
  d: path("M12 18H6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v7h-2V4H4v12h8zm11-3.66l-1.41-1.41l-4.24 4.24l-2.12-2.12l-1.41 1.41L17.34 20z");
}
</style><path class="ck8wqu08j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-mark-chat-read"} {...others} />);
}

export default Component;
