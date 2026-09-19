import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ve1fx3bai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.18 14.817v24.585c.118 3.91-2.587 5.816-6.141 2.093l-14.45-14.28c-.946-.934-.959-2.355.369-3.667L27.674 5.051c.969-.773 1.992-.709 2.945.044l8.658 8.487c1.198 1.238.935 2.054.045 2.982l-10.076 9.942");
}
</style><path class="ve1fx3bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dolap"} {...others} />);
}

export default Component;
