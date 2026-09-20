import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpwtlxjjl {
  fill: currentColor;
  d: path("M6.4 12.689L5.712 12L12 5.712L18.288 12l-.688.689L12 7.114z");
}
</style><path class="fpwtlxjjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-control-key-outline-sharp"} {...others} />);
}

export default Component;
