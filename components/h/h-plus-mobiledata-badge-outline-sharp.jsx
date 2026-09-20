import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhefswbdd {
  fill: currentColor;
  d: path("M5.308 16.5h1v-4h4.615v4h1v-9h-1v4H6.308v-4h-1zm10.384-2h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM2 20V4h20v16zm1-1h18V5H3zm0 0V5z");
}
</style><path class="lhefswbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:h-plus-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
