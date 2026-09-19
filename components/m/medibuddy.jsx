import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dtfy-ibhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.94 35.06l-8.295-8.295a3.91 3.91 0 1 1 5.53-5.53l7.1 7.1l-7.1-7.1a3.91 3.91 0 1 1 5.53-5.53l16.59 16.59a3.91 3.91 0 1 0 5.53-5.53l-7.1-7.099l7.1 7.1a3.91 3.91 0 1 0 5.53-5.53L35.06 12.94");
}

.f04l4phkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.804 25.196l-7.099 7.099a3.91 3.91 0 1 0 5.53 5.53l7.1-7.1l-7.1 7.1a3.91 3.91 0 1 0 5.53 5.53l8.295-8.295M12.94 12.94l8.295-8.294a3.91 3.91 0 1 1 5.53 5.53l-7.1 7.099l7.1-7.1a3.91 3.91 0 1 1 5.53 5.53l-7.1 7.1");
}
</style><path class="dtfy-ibhr"/><path class="f04l4phkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:medibuddy"} {...others} />);
}

export default Component;
