import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixul04bmd {
  fill: currentColor;
  d: path("M4 18h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zm6 2H2V4h20z");
}
</style><path class="ixul04bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-week-outline-sharp"} {...others} />);
}

export default Component;
