import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qo76ccw0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.962 14.925a3.456 3.456 0 0 1-4.887-4.887L28.539 5.5L5.5 28.538l4.538 4.538a3.456 3.456 0 0 1 4.887 4.886l4.537 4.538L42.5 19.462Zm-16.056-2.793L24 14.226m1.862 1.862l2.094 2.094m1.862 1.862l2.094 2.094M33.774 24l2.094 2.094");
}
</style><path class="qo76ccw0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mtickets"} {...others} />);
}

export default Component;
