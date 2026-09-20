import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ep474mtsi {
  fill: currentColor;
  d: path("M13 15V9h2.5V7H13V1h7v6h-2.5v2H20v6zm2-2h3v-2h-3zm0-8h3V3h-3zM4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v6H8.5v2H11v6zm2-2h3v-2H6zm0-8h3v-2H6zm0-8h3V3H6zm1.5-1");
}
</style><path class="ep474mtsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mitre-outline-sharp"} {...others} />);
}

export default Component;
