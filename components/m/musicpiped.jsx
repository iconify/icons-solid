import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rnk1f6bla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.13 30.86V11.5h5.01");
}

.tmz9clp-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.51 21.51 0 0 0 2.5 24A21.51 21.51 0 0 0 24 45.5a21.5 21.5 0 0 0 0-43");
}

.ul_hhpq-q {
  cx: 21.49px;
  cy: 30.86px;
  r: 5.64px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="tmz9clp-b"/><circle class="ul_hhpq-q"/><path class="rnk1f6bla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:musicpiped"} {...others} />);
}

export default Component;
