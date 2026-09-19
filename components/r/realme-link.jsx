import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bw-1m4hnh {
  cx: 24px;
  cy: 24px;
  r: 12.443px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s7xqaugqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.749 21.82L16.297 4.5m-4.548 17.32L11.557 24m24.694 2.18L31.703 43.5");
}
</style><circle class="bw-1m4hnh"/><path class="s7xqaugqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:realme-link"} {...others} />);
}

export default Component;
