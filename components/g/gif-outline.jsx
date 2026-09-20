import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wvn62xhah {
  fill: currentColor;
  d: path("M11.5 15V9H13v6zM6 15q-.45 0-.725-.312T5 14v-4q0-.375.275-.687T6 9h3q.45 0 .725.313T10 10v.5H6.5v3h2V12H10v2q0 .375-.275.688T9 15zm8.5 0V9H19v1.5h-3v1h2V13h-2v2z");
}
</style><path class="wvn62xhah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gif-outline"} {...others} />);
}

export default Component;
