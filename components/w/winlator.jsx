import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.emn0gb08o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M5.5 5.5V35a7.5 7.5 0 0 0 7.5 7.5h29.5V13A7.5 7.5 0 0 0 35 5.5zm0 18.5h37M24 5.5v37");
}
</style><path class="emn0gb08o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:winlator"} {...others} />);
}

export default Component;
