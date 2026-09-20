import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mgravacfw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h11v-3.884H4zm12 0h4V9.23h-4zM4 13.116h11V9.23H4z");
}
</style><path class="mgravacfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:web-sharp"} {...others} />);
}

export default Component;
