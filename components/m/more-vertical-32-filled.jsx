import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.gtuj59bkl {
  fill: currentColor;
  d: path("M13 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="gtuj59bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-vertical-32-filled"} {...others} />);
}

export default Component;
