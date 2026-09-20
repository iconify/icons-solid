import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1isrostl {
  fill: currentColor;
  d: path("M3 20v-6h3v6zm5-6V9h3v5zm5-5V4h3v5zm5 11V4h3v16z");
}
</style><path class="g1isrostl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:waterfall-chart"} {...others} />);
}

export default Component;
