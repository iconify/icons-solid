import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jumkp8bss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.495 31.248H35.5a9 9 0 1 0 0-18h-23a9 9 0 1 0 0 18h8.176c.848 0 1.66.337 2.26.936l2.569 2.568");
}
</style><path class="jumkp8bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qliro"} {...others} />);
}

export default Component;
