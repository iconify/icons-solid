import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uxmm2orvf {
  fill: currentColor;
  d: path("m3.3 18.45l-1.8-.9l6-12l1.8.9zm6.6 0l-1.8-.9l6-12l1.8.9zm6.6 0l-1.8-.9l6-12l1.8.9z");
}
</style><path class="uxmm2orvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:process-chart-outline"} {...others} />);
}

export default Component;
