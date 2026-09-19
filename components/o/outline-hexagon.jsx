import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g0r1g8t_h {
  fill: currentColor;
  d: path("M17.2 3H6.8l-5.2 9l5.2 9h10.4l5.2-9zm-1.15 16h-8.1l-4.04-7l4.04-7h8.09l4.04 7z");
}
</style><path class="g0r1g8t_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-hexagon"} {...others} />);
}

export default Component;
