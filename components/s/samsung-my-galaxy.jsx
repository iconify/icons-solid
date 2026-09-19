import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r6euwrb5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.684 10.506C14.179 13.176.678 21.32 4.457 30.263c6.287 14.882 41.963 1.683 38.068-9.176c-1.809-5.042-12.85-1.397-21.974 1.178");
}
</style><path class="r6euwrb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:samsung-my-galaxy"} {...others} />);
}

export default Component;
