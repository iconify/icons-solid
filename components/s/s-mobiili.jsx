import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jtbpl9bga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.863 43.5h2.534a15.885 15.885 0 0 0 15.885-15.885v-5.821a4.54 4.54 0 0 1 4.538-4.539h.806v-6.967h-1.414A10.21 10.21 0 0 0 24 20.5v7a10.21 10.21 0 0 1-10.212 10.212h-1.414v-6.967h.806a4.54 4.54 0 0 0 4.539-4.539v-5.821A15.885 15.885 0 0 1 33.603 4.5a15.885 15.885 0 0 0-15.885 15.885v5.821a4.54 4.54 0 0 1-4.538 4.539h-.806v6.967h1.415A10.21 10.21 0 0 0 24 27.5");
}
</style><path class="jtbpl9bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:s-mobiili"} {...others} />);
}

export default Component;
