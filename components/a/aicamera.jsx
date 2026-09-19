import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mou5jxb1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.25 18.371h-6.5L17.5 24l3.25 5.629h6.5L30.5 24zM30.5 24l8.75 15.155M8.75 8.845L17.5 24m12-20.784l-8.75 15.155m6.5 11.258L18.5 44.784m2.25-15.155H3.246M27.25 18.371h17.504");
}
</style><circle class="cpk0fnbgt"/><path class="mou5jxb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aicamera"} {...others} />);
}

export default Component;
