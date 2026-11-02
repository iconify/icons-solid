import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9q1o4bfc {
  fill: currentColor;
  d: path("M8 2h8a5 5 0 0 1 5 5v3c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V7a5 5 0 0 1 5-5m5 10V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m-1 2a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="e9q1o4bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-warning-fill-round"} {...others} />);
}

export default Component;
