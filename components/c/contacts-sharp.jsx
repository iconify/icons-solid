import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tjr4xib0k {
  fill: currentColor;
  d: path("M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13M2 20V4h20v16zm3.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18");
}
</style><path class="tjr4xib0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:contacts-sharp"} {...others} />);
}

export default Component;
