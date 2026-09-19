import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.b-sxirohb {
  cx: 32px;
  cy: 54.5px;
  r: 7.5px;
  fill: currentColor;
}

.qgie5perq {
  cx: 32px;
  cy: 9.5px;
  r: 7.5px;
  fill: currentColor;
}

.x2xu2umfc {
  fill: currentColor;
  d: path("M2 26h60v12H2z");
}
</style><path class="x2xu2umfc"/><circle class="qgie5perq"/><circle class="b-sxirohb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:division-sign"} {...others} />);
}

export default Component;
