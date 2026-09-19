import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i3tbjbcxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.07 10.1L26.28 4.92a5.6 5.6 0 0 0-4.26 0L8.89 10.1A2 2 0 0 0 7.62 12v12.47c0 11.16 11.6 19 16.58 19s16.18-7.87 16.18-19V12a2 2 0 0 0-1.31-1.9M24 4.5v39M7.62 24.47h32.76");
}
</style><path class="i3tbjbcxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:auditor"} {...others} />);
}

export default Component;
