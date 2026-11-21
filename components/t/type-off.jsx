import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.su2y7o71q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2L22 22M4 6V5C4 4.7065 4.0632 4.4278 4.1767 4.1767M8.6569 3H18C19.1046 3 20 3.8954 20 5V6M12 3V6.3431M12 21V12M8.6569 21H15.3431");
}
</style><path class="su2y7o71q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-off"} {...others} />);
}

export default Component;
