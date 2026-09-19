import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i-vfz0b_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.094 4.5c-1.219 0-2.438 1.219-2.438 2.438v34.125c0 1.218 1.22 2.437 2.438 2.437H17.906c1.22 0 2.438-1.219 2.438-2.437V6.938c0-1.22-1.219-2.438-2.438-2.438z");
}
</style><path class="i-vfz0b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:imprint"} {...others} />);
}

export default Component;
