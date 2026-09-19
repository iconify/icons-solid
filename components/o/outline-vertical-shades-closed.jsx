import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.alurfvbwq {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM13 5h1.5v14H13zm-2 14H9.5V5H11zM6 5h1.5v14H6zm10.5 14V5H18v14z");
}
</style><path class="alurfvbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-vertical-shades-closed"} {...others} />);
}

export default Component;
