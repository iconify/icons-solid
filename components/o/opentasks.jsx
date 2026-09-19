import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vet92cebo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.67 6.09L42.5 11L21.59 31.89L11 21.31l4.82-4.82l5.75 5.74ZM28.48 25h10.34A1.24 1.24 0 0 1 40 26.14v4.6a1.24 1.24 0 0 1-1.15 1.15H6.65a1.15 1.15 0 0 1-1.15-1.15v-4.6A1.24 1.24 0 0 1 6.65 25h8m-8 10h32.17A1.23 1.23 0 0 1 40 36.17v4.59a1.23 1.23 0 0 1-1.15 1.15H6.65a1.15 1.15 0 0 1-1.15-1.15v-4.59A1.23 1.23 0 0 1 6.65 35");
}
</style><path class="vet92cebo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:opentasks"} {...others} />);
}

export default Component;
