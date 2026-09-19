import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jq3g91b1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.676 35.05c-1.234-2.363-1.865-4.845-2.176-7.59L18.524 8.067c2.506-.856 5.105-1.055 7.607-.729zm27.697 5.76h-23.17c-2.042-1.892-3.495-3.785-4.527-5.76h23.915zm5.707-7.307c1.373-1.993 1.415-5.145 1.42-8.131L31.554 8.921l-13.994 20.6h7.063l6.81-10.02z");
}
</style><path class="jq3g91b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:eurobank"} {...others} />);
}

export default Component;
