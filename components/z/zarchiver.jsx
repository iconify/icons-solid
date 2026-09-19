import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.js2i01-yx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.89 7.05h23.53l-11 25.42h13.17L34.26 41H4.51l11-25.42h-5zm23.53 0L43.51 41h-9.25L24 17.25");
}
</style><path class="js2i01-yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zarchiver"} {...others} />);
}

export default Component;
