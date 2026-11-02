import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dlrwu88pf {
  fill: currentColor;
  d: path("M4 3h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 0h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m13 0a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2Zm3.01 0a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2ZM15 20a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm6-2v2a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1");
}
</style><path class="dlrwu88pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:qr-code-fill-sharp"} {...others} />);
}

export default Component;
