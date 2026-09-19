import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.neaz3iw5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5a21.5 21.5 0 0 0 0 43c4.45 0 8.06-9.63 8.06-21.5S28.45 2.5 24 2.5m0 43a21.49 21.49 0 0 0 1.09-42.95c8 .81 14.25 10.17 14.25 21.45c0 11.87-6.87 21.5-15.34 21.5");
}
</style><path class="neaz3iw5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:jelly"} {...others} />);
}

export default Component;
