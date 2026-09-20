import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lkpuntb9t {
  fill: currentColor;
  d: path("M20 20H4v-4.592h16zm0-5.592H4V9.587h16zm0-5.821H4V4h16z");
}
</style><path class="lkpuntb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-rows"} {...others} />);
}

export default Component;
