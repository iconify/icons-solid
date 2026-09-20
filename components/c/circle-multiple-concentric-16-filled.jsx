import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.qhnwmiftk {
  fill: currentColor;
  d: path("M2.5 8a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="qhnwmiftk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-multiple-concentric-16-filled"} {...others} />);
}

export default Component;
