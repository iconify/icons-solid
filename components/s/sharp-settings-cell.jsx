import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pcwe87b8j {
  fill: currentColor;
  d: path("M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM6 0v20h12V0zm10 16H8V4h8z");
}
</style><path class="pcwe87b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-settings-cell"} {...others} />);
}

export default Component;
