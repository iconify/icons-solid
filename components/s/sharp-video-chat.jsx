import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gyvqrbb9m {
  fill: currentColor;
  d: path("M2 2v20l4-4h16V2zm15 11l-2-1.99V14H7V6h8v2.99L17 7z");
}
</style><path class="gyvqrbb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-video-chat"} {...others} />);
}

export default Component;
