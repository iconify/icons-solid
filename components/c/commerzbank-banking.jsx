import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fnbr18bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.791 32.92H13.766c-3.058-.092-4.635-.947-6.196-3.502l-2.977-5.191L14.319 7.24l4.469-.045m8.054 4.133L36.855 28.67c1.45 2.695 1.498 4.488.065 7.117l-3.007 5.174l-19.573.069l-2.273-3.847m-.448-9.042L21.63 10.8c1.609-2.603 3.138-3.541 6.13-3.615l5.985.017l9.846 16.917l-2.194 3.892");
}
</style><path class="fnbr18bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:commerzbank-banking"} {...others} />);
}

export default Component;
