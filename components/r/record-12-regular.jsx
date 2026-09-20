import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.uxxq3qbbv {
  fill: currentColor;
  d: path("M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5-3A5 5 0 1 1 1 6a5 5 0 0 1 10 0m-1 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0");
}
</style><path class="uxxq3qbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:record-12-regular"} {...others} />);
}

export default Component;
