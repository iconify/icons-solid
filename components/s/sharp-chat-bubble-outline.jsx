import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dv-82bbeb {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z");
}
</style><path class="dv-82bbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-chat-bubble-outline"} {...others} />);
}

export default Component;
