import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miv0rd35g {
  fill: currentColor;
  d: path("M2 20V4h20v16zm9-7h8V7h-8z");
}
</style><path class="miv0rd35g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-sharp"} {...others} />);
}

export default Component;
