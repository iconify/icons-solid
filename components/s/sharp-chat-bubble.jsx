import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ykjv5hbpp {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16z");
}
</style><path class="ykjv5hbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-chat-bubble"} {...others} />);
}

export default Component;
