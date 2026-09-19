import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pqk0-6bhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.93 20.51h11.491m-10.748-5.435H30.07M26.273 23.4l1.216-11.241m-6.745 11.24l1.216-11.24M24 4.5c-7.23 0-13.091 5.86-13.091 13.091c0 10.251 10 22.612 12.611 25.632a.8.8 0 0 0 1.21 0c2.55-3 12.361-15.381 12.361-25.632c0-7.23-5.86-13.091-13.09-13.091");
}
</style><path class="pqk0-6bhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mapstr"} {...others} />);
}

export default Component;
