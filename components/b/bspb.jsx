import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d1anuqbra {
  cx: 24px;
  cy: 42.66px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.06px;
  ry: 0.87px;
}

.llpws4ify {
  cx: 24px;
  cy: 36.21px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 13.06px;
  ry: 3.64px;
}

.v87xztbmb {
  cx: 24px;
  cy: 17.59px;
  r: 13.06px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="v87xztbmb"/><ellipse class="llpws4ify"/><ellipse class="d1anuqbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bspb"} {...others} />);
}

export default Component;
