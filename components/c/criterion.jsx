import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n5o7ctblg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.934 44.767c-11.47 3.074-23.26-3.733-26.332-15.202C.528 18.095 7.335 6.305 18.804 3.233c11.47-3.074 23.26 3.733 26.332 15.202");
}
</style><path class="n5o7ctblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:criterion"} {...others} />);
}

export default Component;
