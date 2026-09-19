import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nkq6xwzrr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.662 20.65l3.959 2.78l-5.415 2.605m14.528.136l-3.96-2.782l5.416-2.604m-22.226 2.604h11.657M33.076 5.5l-3.96 14.79m-1.653 6.17l-4.295 16.039l5.94.001c3.265 0 4.347-1.153 5.37-4.973h0l2.94-10.886c.471-1.748.356-2.007-.517-3.217h0m-8.994-.034h9.044m-.05.034c1.186-.712 1.884-1.971 2.183-3.09l2.48-9.263c.822-3.076 1.32-5.57-2.253-5.57H15.752L5.844 42.5");
}
</style><path class="nkq6xwzrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:futbin"} {...others} />);
}

export default Component;
