import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ydc38ybbx {
  fill: currentColor;
  d: path("M9.5 6V3.55L3.55 9.5H6V11H1V6h1.5v2.45L8.45 2.5H6V1h5v5zm4.075 17L7.6 17l1.575-1.625l2.825.8V7h2v8h1v-4h2v4h1v-3h2v3h1v-1h2v9z");
}
</style><path class="ydc38ybbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pinch-sharp"} {...others} />);
}

export default Component;
