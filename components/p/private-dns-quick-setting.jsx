import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t9of2fb1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.343 17.89c1.884-4.253 6.154-7.003 10.874-7.003c6.458 0 11.71 5.072 11.854 11.369c4.97-.789 8.34 2.93 8.34 7.173s-3.744 7.684-8.362 7.684H13.117c-5.262 0-9.527-4.268-9.527-9.533s4.265-9.533 9.527-9.533c4.83 0 8.822 3.598 9.443 8.262");
}
</style><path class="t9of2fb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:private-dns-quick-setting"} {...others} />);
}

export default Component;
