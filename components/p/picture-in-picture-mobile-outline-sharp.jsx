import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pc32ukbhp {
  fill: currentColor;
  d: path("M20 22H4V2h16zm-2-2V4H6v16zm0-16H6zm-1 9V5h-6v8zm-2-2h-2V7h2z");
}
</style><path class="pc32ukbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-mobile-outline-sharp"} {...others} />);
}

export default Component;
