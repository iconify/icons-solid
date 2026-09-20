import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nsb0_pb_t {
  fill: currentColor;
  d: path("M2 20V4h20v16zm14.975-2l2.3-8.65L7.075 6l-2.3 8.65z");
}
</style><path class="nsb0_pb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-stable-sharp"} {...others} />);
}

export default Component;
