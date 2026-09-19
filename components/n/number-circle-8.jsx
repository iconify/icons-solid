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

.ygqau6tqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.7 24a4 4 0 0 0-4 4h0a4 4 0 0 0 4 4h2.6a4 4 0 0 0 4-4h0a4 4 0 0 0-4-4m0 0a4 4 0 0 0 4-4h0a4 4 0 0 0-4-4h-2.6a4 4 0 0 0-4 4h0a4 4 0 0 0 4 4m0 0h2.6");
}
</style><circle class="cpk0fnbgt"/><path class="ygqau6tqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:number-circle-8"} {...others} />);
}

export default Component;
