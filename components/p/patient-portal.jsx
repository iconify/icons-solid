import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aofc66r0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.677 4.662a43.5 43.5 0 0 0-1.942 15.783m2.54 10.056a46.5 46.5 0 0 0 8.885 12.837M18.663 25.644A30.9 30.9 0 0 0 3.5 22.993");
}

.b-zvlb6hf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.5 19.606C26.689 21.413 18.372 29.732 12.224 42.93");
}
</style><path class="b-zvlb6hf"/><path class="aofc66r0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:patient-portal"} {...others} />);
}

export default Component;
