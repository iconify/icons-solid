import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avehd74dq {
  fill: currentColor;
  d: path("M5 21V3h14v18zm2.73-3.5h8.693l-2.757-3.654l-2.454 3.077l-1.589-1.884z");
}
</style><path class="avehd74dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:planner-banner-ad-pt-sharp"} {...others} />);
}

export default Component;
