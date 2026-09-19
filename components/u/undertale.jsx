import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g3y6t-b4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.437 9.853h-2.18V7.677h-2.18V5.5H30.54v2.177h-2.18v2.176h-2.18v4.353h-4.36V9.853h-2.18V7.677h-2.179V5.5h-6.539v2.177h-2.18v2.176H6.564v19.588h4.36v4.353h4.358v4.353h4.36V42.5h8.718v-4.353h4.36v-4.353h4.359v-4.353h4.359z");
}
</style><path class="g3y6t-b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:undertale"} {...others} />);
}

export default Component;
