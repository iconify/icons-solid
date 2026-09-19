import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a_xgo4bwr {
  cx: 38.47px;
  cy: 24px;
  r: 5.03px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cj71dkbis {
  cx: 9.53px;
  cy: 24px;
  r: 5.03px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wv2flf2hg {
  cx: 24px;
  cy: 24px;
  r: 9.44px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="wv2flf2hg"/><circle class="cj71dkbis"/><circle class="a_xgo4bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nextcloud"} {...others} />);
}

export default Component;
