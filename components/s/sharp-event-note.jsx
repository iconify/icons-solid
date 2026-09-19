import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_r1s_bet {
  fill: currentColor;
  d: path("M17 10H7v2h10zm4-7h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14zm-5-5H7v2h7z");
}
</style><path class="b_r1s_bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-event-note"} {...others} />);
}

export default Component;
