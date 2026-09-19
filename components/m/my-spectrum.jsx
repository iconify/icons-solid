import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.chdt74bhh {
  cx: 24.412px;
  cy: 15.074px;
  r: 9.574px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qpgc8sblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.865 42.5c0-9.867-7.998-17.865-17.865-17.865S6.135 32.633 6.135 42.5z");
}
</style><path class="qpgc8sblw"/><circle class="chdt74bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-spectrum"} {...others} />);
}

export default Component;
