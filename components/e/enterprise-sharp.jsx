import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgd-ppmmz {
  fill: currentColor;
  d: path("M13.066 14.566q.434-.433.434-1.066t-.434-1.066T12 12t-1.066.434q-.434.433-.434 1.066t.434 1.066T12 15t1.066-.434M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4z");
}
</style><path class="bgd-ppmmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:enterprise-sharp"} {...others} />);
}

export default Component;
