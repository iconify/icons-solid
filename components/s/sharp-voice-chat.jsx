import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n5bd6u2jk {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zm-4 12l-4-3.2V14H6V6h8v3.2L18 6z");
}
</style><path class="n5bd6u2jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-voice-chat"} {...others} />);
}

export default Component;
