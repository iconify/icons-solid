import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8flamb1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 6H15C16.65685 6 18 7.34315 18 9V15C18 16.65685 16.65685 18 15 18H5C3.34315 18 2 16.65685 2 15V9C2 7.34315 3.34315 6 5 6ZM22 9.5V14.5M6 10V14");
}
</style><path class="b8flamb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:battery-low"} {...others} />);
}

export default Component;
