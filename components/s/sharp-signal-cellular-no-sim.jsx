import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ov7q7vblz {
  fill: currentColor;
  d: path("M19 3h-9L7.95 5.06L19 16.11zm-15.21.74L2.38 5.15L5 7.77V21h13.23l1.62 1.62l1.41-1.41z");
}
</style><path class="ov7q7vblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-signal-cellular-no-sim"} {...others} />);
}

export default Component;
