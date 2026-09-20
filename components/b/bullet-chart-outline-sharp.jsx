import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ketmu2bfq {
  fill: currentColor;
  d: path("M2 19V5h9V3h2v2h9v14h-9v2h-2v-2zm2-2h7v-2H4zm0-8h7V7H4zm0 4h10v-2H4zm9 4h7V7h-7v2h3v6h-3zm-9-4v-2z");
}
</style><path class="ketmu2bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bullet-chart-outline-sharp"} {...others} />);
}

export default Component;
