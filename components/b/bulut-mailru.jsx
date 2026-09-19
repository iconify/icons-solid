import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iujy5t69m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.932 23.271a12.303 12.303 0 0 1 23.193-7.852");
}

.pqg4t6b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.983 39.794a8.412 8.412 0 1 1 6.902-14.285m-6.996 14.286h18.794");
}

.t1ehig_ge {
  cx: 31.197px;
  cy: 27.512px;
  r: 12.303px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="t1ehig_ge"/><path class="iujy5t69m"/><path class="pqg4t6b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bulut-mailru"} {...others} />);
}

export default Component;
