import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mq3y6wily {
  fill: currentColor;
  d: path("M9 14V7h9q1.65 0 2.825 1.175T22 11v3zm-7 3v-2h20v2zm.875-3.875Q2 12.25 2 11t.875-2.125T5 8t2.125.875T8 11t-.875 2.125T5 14t-2.125-.875");
}
</style><path class="mq3y6wily"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:airline-seat-flat"} {...others} />);
}

export default Component;
