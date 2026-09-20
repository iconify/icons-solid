import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.q6mq9kb0u {
  fill: currentColor;
  d: path("M3 2.5a.5.5 0 0 1 1 0v3.843l3.171-3.171a4 4 0 0 1 5.657 5.656l-5.025 5.026a.5.5 0 0 1-.707-.708l5.025-5.025A3 3 0 1 0 7.878 3.88L4.757 7H8.5a.5.5 0 0 1 0 1H3.6a.6.6 0 0 1-.6-.6z");
}
</style><path class="q6mq9kb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-undo-16-regular"} {...others} />);
}

export default Component;
