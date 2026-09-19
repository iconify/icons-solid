import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yj1l9_t5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.828 19.822a4.62 4.62 0 0 0-4.618-4.619h0a4.62 4.62 0 0 0-4.619 4.619v8.307c0 .96-.314 1.893-.894 2.658l-1.525 2.01h11.656m-6.818-8.192h-4.838");
}
</style><path class="yj1l9_t5l"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:currency-pound"} {...others} />);
}

export default Component;
