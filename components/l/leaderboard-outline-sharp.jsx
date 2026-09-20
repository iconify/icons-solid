import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.svvxdj94z {
  fill: currentColor;
  d: path("M4 19h4v-8H4zm6 0h4V5h-4zm6 0h4v-6h-4zM2 21V9h6V3h8v8h6v10z");
}
</style><path class="svvxdj94z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:leaderboard-outline-sharp"} {...others} />);
}

export default Component;
