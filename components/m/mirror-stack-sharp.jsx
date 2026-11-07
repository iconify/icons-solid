import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vhlfhibbg {
  fill: currentColor;
  d: path("M4 22V6h10v16zm12-4V4h-6V2h10v16z");
}
</style><path class="vhlfhibbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mirror-stack-sharp"} {...others} />);
}

export default Component;
