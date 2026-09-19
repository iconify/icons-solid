import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a09a1mr5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5A16.36 16.36 0 0 0 7.638 20.863A23.84 23.84 0 0 0 23.999 43.5v-6.275H24A16.363 16.363 0 0 0 24 4.5m0 21.745V15.48m-5.382 5.383h10.764");
}
</style><path class="a09a1mr5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:telegram-plus"} {...others} />);
}

export default Component;
