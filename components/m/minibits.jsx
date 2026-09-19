import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e0px5tbif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.025 37.097c-.147-12.733.443-24.483 9.145-24.483c6.539 0 5.457 14.798 9.93 14.798c5.409 0 6.195-14.798 14.651-14.798c7.867 0 4.573 23.942 4.573 23.942");
}
</style><path class="e0px5tbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:minibits"} {...others} />);
}

export default Component;
