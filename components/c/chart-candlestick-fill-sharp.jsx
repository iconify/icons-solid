import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ju96ns-_e {
  fill: currentColor;
  d: path("M13 3v1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-2 0v-2h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1V3a1 1 0 0 1 2 0m-7 9v2h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-2 0H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1v-2a1 1 0 0 1 2 0m12 2v-2a1 1 0 0 1 2 0v2h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z");
}
</style><path class="ju96ns-_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-candlestick-fill-sharp"} {...others} />);
}

export default Component;
