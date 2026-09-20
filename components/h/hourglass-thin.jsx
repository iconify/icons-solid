import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vl1o7rbhn {
  fill: currentColor;
  d: path("M196 75.64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4l-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57m-8 104.72V216a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-36a4 4 0 0 1 1.6-3.2L128 133l58.42 44.16a4 4 0 0 1 1.58 3.2m0-104.72a4 4 0 0 1-1.59 3.19L128 123L69.6 79.2A4 4 0 0 1 68 76V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z");
}
</style><path class="vl1o7rbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hourglass-thin"} {...others} />);
}

export default Component;
