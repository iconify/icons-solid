import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.osv1_dqxe {
  fill: currentColor;
  d: path("M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z");
}
</style><path class="osv1_dqxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-candlestick-chart"} {...others} />);
}

export default Component;
