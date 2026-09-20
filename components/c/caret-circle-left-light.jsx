import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fxdu8ybxk {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m20.24-125.76L112.49 128l35.75 35.76a6 6 0 1 1-8.48 8.48l-40-40a6 6 0 0 1 0-8.48l40-40a6 6 0 0 1 8.48 8.48");
}
</style><path class="fxdu8ybxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-left-light"} {...others} />);
}

export default Component;
