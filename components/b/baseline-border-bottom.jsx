import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kn8wvr06n {
  fill: currentColor;
  d: path("M9 11H7v2h2zm4 4h-2v2h2zM9 3H7v2h2zm4 8h-2v2h2zM5 3H3v2h2zm8 4h-2v2h2zm4 4h-2v2h2zm-4-8h-2v2h2zm4 0h-2v2h2zm2 10h2v-2h-2zm0 4h2v-2h-2zM5 7H3v2h2zm14-4v2h2V3zm0 6h2V7h-2zM5 11H3v2h2zM3 21h18v-2H3zm2-6H3v2h2z");
}
</style><path class="kn8wvr06n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-border-bottom"} {...others} />);
}

export default Component;
