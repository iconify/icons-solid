import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2yz34b8e {
  fill: currentColor;
  d: path("m21 1l-8.59 8.59L21 18.18zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73z");
}
</style><path class="g2yz34b8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-signal-cellular-off"} {...others} />);
}

export default Component;
