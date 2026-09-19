import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a1ra9wdwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.646 14.626C8.129 7.448 15.486 2.5 24 2.5a21.43 21.43 0 0 1 15.203 6.297M45.5 24c0 11.874-9.626 21.5-21.5 21.5c-8.545 0-15.926-4.985-19.393-12.206M45.5 24H17");
}

.qvld11nnw {
  cx: 5.783px;
  cy: 24px;
  r: 3.283px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="a1ra9wdwn"/><circle class="qvld11nnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:govee-home"} {...others} />);
}

export default Component;
