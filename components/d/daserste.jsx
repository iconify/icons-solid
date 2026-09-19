import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.z77mre9ce {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M39.57 5.5v29.73L19.78 42.5V21.32L8.43 25.5V17Z");
}
</style><path class="z77mre9ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:daserste"} {...others} />);
}

export default Component;
