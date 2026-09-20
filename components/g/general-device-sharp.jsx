import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qw1_j2b3t {
  fill: currentColor;
  d: path("M8 18V3h8v15zm0 3v-2h8v2z");
}
</style><path class="qw1_j2b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:general-device-sharp"} {...others} />);
}

export default Component;
