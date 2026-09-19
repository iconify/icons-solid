import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dex8ndblg {
  fill: currentColor;
  d: path("M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM13 8h3V7h-3V5.5h4.5V9h-3v1h3v1.5H13zm5 9h-3v1.5h-1.5v-6H18z");
}

.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}
</style><path class="dex8ndblg"/><path class="k4n51fjcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-22mp"} {...others} />);
}

export default Component;
