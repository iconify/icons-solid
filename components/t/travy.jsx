import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ot3avac5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.422 32.075c6.308-6.308 6.308-16.536 0-22.844s-16.536-6.308-22.844 0s-6.308 16.536 0 22.844a16.2 16.2 0 0 0 3.223 2.496l6.116-6.115a8.076 8.076 0 1 1 7.794-2.092L18.289 37.786L24 43.497z");
}
</style><path class="ot3avac5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:travy"} {...others} />);
}

export default Component;
