import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h0smet13q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.525 10.3L6.356 31.378c-2.433 4.215.609 9.483 5.476 9.483h24.336c4.867 0 7.909-5.268 5.476-9.483L29.475 10.301c-2.433-4.215-8.517-4.215-10.95 0Z");
}
</style><path class="h0smet13q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:prisma"} {...others} />);
}

export default Component;
