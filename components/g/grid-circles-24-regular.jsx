import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.naqtbfqpz {
  fill: currentColor;
  d: path("M11 7a4 4 0 1 0-8 0a4 4 0 0 0 8 0M9.5 7a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M21 7a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7 21a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 17a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="naqtbfqpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:grid-circles-24-regular"} {...others} />);
}

export default Component;
