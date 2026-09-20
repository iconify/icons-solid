import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nuf3n_b1y {
  fill: currentColor;
  d: path("M9.707 6.707a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 12H13a6 6 0 0 1 6 6a1 1 0 1 0 2 0a8 8 0 0 0-8-8H6.414z");
}
</style><path class="nuf3n_b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-reply-24-filled"} {...others} />);
}

export default Component;
