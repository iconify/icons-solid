import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jrnbwlw1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.286 13.775V5.5H7.714v10.308l32.16 8.45C37.696 32.82 32.657 38.25 24.288 42.5C14.845 39.419 7.993 29.026 7.714 24.258");
}
</style><path class="jrnbwlw1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:peatsaudio"} {...others} />);
}

export default Component;
