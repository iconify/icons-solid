import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e1qll_3td {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.622v27.166c7.078-3.906 13.973-3.233 19.5 0c5.997-3.298 12.514-3.603 19.5 0V11.622a20.94 20.94 0 0 0-19.5 0c-5.461-1.673-9.745-4.379-19.5 0");
}

.t6j6--bsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.684 19.538a17.9 17.9 0 0 1 11.43-.807m-11.43 10.221a17.9 17.9 0 0 1 11.43-.807m-11.43-4.035a17.9 17.9 0 0 1 11.43-.807");
}
</style><path class="e1qll_3td"/><path class="t6j6--bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:notification-dictionary"} {...others} />);
}

export default Component;
