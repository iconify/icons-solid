import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hvzpk2bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.783 6.396L23.47 24.242L5.5 42.5m24.082-23.582L42.5 5.5M28.836 29.894l13.499 12.319");
}
</style><path class="hvzpk2bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:norsk-tipping"} {...others} />);
}

export default Component;
