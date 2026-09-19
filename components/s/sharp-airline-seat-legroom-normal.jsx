import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.srjn1b4iv {
  fill: currentColor;
  d: path("M5 15V3H3v14h11v-2zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6z");
}
</style><path class="srjn1b4iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-airline-seat-legroom-normal"} {...others} />);
}

export default Component;
