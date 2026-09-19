import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iz7lo-wma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.423 29.693c-3.628 3.954-10.702 5.505-10.702 5.505a11.337 11.337 0 1 1 .48-22.078a29.2 29.2 0 0 0 10.249 1.732V6.191s-3.6.452-11.428-1.288A19.503 19.503 0 1 0 26.05 43.5c1.333 0 6.566.119 15.328-4.689Z");
}
</style><path class="iz7lo-wma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:chime"} {...others} />);
}

export default Component;
