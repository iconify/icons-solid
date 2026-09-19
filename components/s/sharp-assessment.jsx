import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igydykg9y {
  fill: currentColor;
  d: path("M21 3H3v18h18zM9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z");
}
</style><path class="igydykg9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-assessment"} {...others} />);
}

export default Component;
