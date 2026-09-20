import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjwn93ips {
  fill: currentColor;
  d: path("M8 19v-2H6V7h2V5h1v2h2v10H9v2zm-1-3h3V8H7zm8 3v-4.615h-2V8.808h2V5h1v3.808h2v5.577h-2V19zm-1-5.616h3V9.808h-3zm1.5-1.788");
}
</style><path class="xjwn93ips"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:candlestick-chart-outline-sharp"} {...others} />);
}

export default Component;
