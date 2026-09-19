import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wq9y73b8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.385 7.525A27.58 27.58 0 0 0 15.923 24A27.58 27.58 0 0 0 24 43.5m0-39A27.58 27.58 0 0 1 32.077 24a27.58 27.58 0 0 1-5.462 16.475");
}
</style><path class="wq9y73b8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alsalam-bank"} {...others} />);
}

export default Component;
