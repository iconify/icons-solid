import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d_h4znbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.075 17.927A16.765 16.765 0 1 1 26.608 38.46m-10.073-.44a16.77 16.77 0 0 1-10.46-11.415");
}

.fv0cwb0so {
  cx: 22.269px;
  cy: 22.382px;
  r: 1.734px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hn0fwqbmv {
  cx: 29.785px;
  cy: 22.382px;
  r: 1.734px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qvkugabjj {
  cx: 14.754px;
  cy: 22.382px;
  r: 1.734px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rbgz4-i-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.972 34.273l7.953 8.227");
}
</style><path class="d_h4znbsu"/><circle class="fv0cwb0so"/><circle class="hn0fwqbmv"/><circle class="qvkugabjj"/><path class="rbgz4-i-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:reverseimagesearch"} {...others} />);
}

export default Component;
