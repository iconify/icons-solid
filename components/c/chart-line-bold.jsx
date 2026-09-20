import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b92x71e1h {
  fill: currentColor;
  d: path("M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v85.55L88.1 95a12 12 0 0 1 15.1-.57l56.22 42.16L216.1 87a12 12 0 1 1 15.8 18l-64 56a12 12 0 0 1-15.1.57l-56.22-42.13L44 165.45V196h180a12 12 0 0 1 12 12");
}
</style><path class="b92x71e1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-line-bold"} {...others} />);
}

export default Component;
