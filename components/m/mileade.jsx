import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ahrost-2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.519 41.28C6.497 34.785 2.457 21.316 5.392 14.745s14.823-5.32 21.272 4.597c5.871 10.18-6.593 14.428-5.011 1.167C23.668 9.414 34.329 4.867 38.599 7.404c6.786 3.9 7.22 20.65-3.128 30.712");
}
</style><path class="ahrost-2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mileade"} {...others} />);
}

export default Component;
