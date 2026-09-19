import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jamt8t__f {
  cx: 24px;
  cy: 24px;
  r: 11.629px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w05uzxbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5c10.217 0 18.5 8.283 18.5 18.5v18.5H24C13.783 42.5 5.5 34.217 5.5 24h0C5.5 13.783 13.783 5.5 24 5.5");
}
</style><path class="w05uzxbek"/><circle class="jamt8t__f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qlist"} {...others} />);
}

export default Component;
