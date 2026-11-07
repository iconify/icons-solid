import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ak5r4vsrj {
  fill: currentColor;
  d: path("M2.954 16.131A9.946 9.946 0 0 1 19.032 4.968A9.945 9.945 0 0 1 7.869 21.046l-4.673.935a1 1 0 0 1-1.177-1.177ZM8 9a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Zm5 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2");
}
</style><path class="ak5r4vsrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-circle-text-fill"} {...others} />);
}

export default Component;
