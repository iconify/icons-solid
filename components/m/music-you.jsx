import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cmwh9dbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.66 35.378V12.834M28.69 4.5h6.864a2.03 2.03 0 0 1 2.03 2.03v4.273a2.03 2.03 0 0 1-2.03 2.03H26.66h0V6.53a2.03 2.03 0 0 1 2.03-2.03");
}

.qb81tbb2n {
  cx: 18.538px;
  cy: 35.378px;
  r: 8.122px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="qb81tbb2n"/><path class="cmwh9dbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:music-you"} {...others} />);
}

export default Component;
