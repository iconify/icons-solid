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

.sx9_vtxnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.69 27.75a7.91 7.91 0 0 1-5.1 6.12h0a7.94 7.94 0 0 1-10.16-4.74l-1.76-4.84a7.94 7.94 0 0 1 4.74-10.16h0a7.94 7.94 0 0 1 10.16 4.74l.88 2.42l-14.9 5.42M45.5 24h-8");
}
</style><circle class="cpk0fnbgt"/><path class="sx9_vtxnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:esewa"} {...others} />);
}

export default Component;
