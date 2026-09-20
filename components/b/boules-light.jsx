import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vemlc_-ax {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m59.22 34.29L60.29 187.22a90.2 90.2 0 0 1-12.53-18.49l121-121a90.2 90.2 0 0 1 18.46 12.56m8.49 8.49a90.2 90.2 0 0 1 12.53 18.49l-121 121a90.2 90.2 0 0 1-18.49-12.53ZM128 38a89.7 89.7 0 0 1 28.79 4.72L42.72 156.79A90 90 0 0 1 128 38m0 180a89.7 89.7 0 0 1-28.79-4.72L213.28 99.21A90 90 0 0 1 128 218");
}
</style><path class="vemlc_-ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:boules-light"} {...others} />);
}

export default Component;
