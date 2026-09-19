import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n9dzpdb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 20.623l7.8 13.51l11.7-20.266H30.23C34.892 19.014 32.58 24.41 25.95 24");
}

.vgbd-8bnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.35 24c6.631.41 8.942-4.987 4.28-10.132H27.9L16.2 34.133L4.5 13.867h7.8");
}
</style><path class="n9dzpdb3p"/><path class="vgbd-8bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:walp"} {...others} />);
}

export default Component;
