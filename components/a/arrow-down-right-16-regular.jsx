import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.hae7ddcce {
  fill: currentColor;
  d: path("M7.5 13a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-1 0v4.793L2.854 2.146a.5.5 0 1 0-.708.708L12.293 13z");
}
</style><path class="hae7ddcce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-right-16-regular"} {...others} />);
}

export default Component;
