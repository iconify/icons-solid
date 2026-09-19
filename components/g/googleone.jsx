import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l57u88tix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.79 12.22a4.33 4.33 0 0 0-2.71-7.72H25a4.37 4.37 0 0 0-2.64 1m-10.82 8.62a4.33 4.33 0 0 0 2.71 7.71h.07a4.3 4.3 0 0 0 2.68-.95m3.75 9.27l8.67 6.93");
}

.y-mcsn_zh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.75 8.83a4.34 4.34 0 0 1 8.67 0m0 30.34a4.34 4.34 0 0 1-8.67 0m-9.21-25.05l10.84-8.67m5.41 6.77L17 20.88M29.42 8.83v30.34m-8.67 0V8.83");
}
</style><path class="y-mcsn_zh"/><path class="l57u88tix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:googleone"} {...others} />);
}

export default Component;
