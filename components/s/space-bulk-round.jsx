import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sf-gaf8dt {
  fill: currentColor;
  d: path("M5 11a3 3 0 0 0 3 3h8c.796 0 1.559-.316 2.121-.879A3 3 0 0 0 19 11V9a1 1 0 0 1 2 0v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9a1 1 0 0 1 2 0Z");
}
</style><path class="sf-gaf8dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:space-bulk-round"} {...others} />);
}

export default Component;
