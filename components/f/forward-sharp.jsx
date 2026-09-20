import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u3lm1ublv {
  fill: currentColor;
  d: path("m16 17l-1.425-1.4l4.6-4.6l-4.6-4.6L16 5l6 6zM2 19v-4q0-2.075 1.463-3.537T7 10h6.175l-3.6-3.6L11 5l6 6l-6 6l-1.425-1.4l3.6-3.6H7q-1.25 0-2.125.875T4 15v4z");
}
</style><path class="u3lm1ublv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:forward-sharp"} {...others} />);
}

export default Component;
