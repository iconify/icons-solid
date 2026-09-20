import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.mlkcbfjpd {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="mlkcbfjpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-multiple-concentric-16-regular"} {...others} />);
}

export default Component;
