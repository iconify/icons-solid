import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yyme27cps {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zM7 9V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm-8 4v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z");
}
</style><path class="yyme27cps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:margin-outline-sharp"} {...others} />);
}

export default Component;
