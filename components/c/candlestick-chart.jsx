import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhu9qj-gj {
  fill: currentColor;
  d: path("M7 20v-2H5V6h2V4h2v2h2v12H9v2zm8 0v-5h-2V8h2V4h2v4h2v7h-2v5z");
}
</style><path class="hhu9qj-gj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:candlestick-chart"} {...others} />);
}

export default Component;
