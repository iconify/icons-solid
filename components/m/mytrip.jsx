import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yfxmi1rpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.133 26.647c.9-2.01.92-3.15-.03-5.46l-4.77-10.45c-2.13-4.71-2.05-5.34-5.68-5.5c-7.22-.27-7.98-.25-4.32 6.62l4.92 9.78c.89 1.81.89 2.92-.2 5.05l-4.69 9.36c-3.69 6.87-2.91 6.87 4.27 6.78c3.8 0 3.57-.95 5.7-5.66z");
}
</style><path class="yfxmi1rpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mytrip"} {...others} />);
}

export default Component;
