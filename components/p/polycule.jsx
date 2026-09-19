import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aeexfbztz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 12h6l-6.75 12l3.9 6.975L28.35 12h6.15l6.75 12l-6.75 12h-6l6.75-12l-3.9-6.9L19.725 36h-6.3L6.75 24z");
}
</style><path class="aeexfbztz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:polycule"} {...others} />);
}

export default Component;
