import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwo-lbclm {
  fill: currentColor;
  d: path("M3 22v-6.55l2.75-3.125l1.425 1.425l-2 2.25h13.65l-1.95-2.2l1.425-1.425L21 15.45V22zm9.025-6.175L5.7 9.45l7.75-7.75l6.375 6.325zm.025-2.875L17 8l-3.55-3.5L8.5 9.45z");
}
</style><path class="qwo-lbclm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:how-to-vote-sharp"} {...others} />);
}

export default Component;
