import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e5d9cfvgv {
  fill: currentColor;
  d: path("M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.08 16.08 0 0 0 6.41 12.8l52.26 39.2l-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16 16 0 0 0-6.36-12.77L141.26 128l52.38-39.59A16.05 16.05 0 0 0 200 75.64");
}
</style><path class="e5d9cfvgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hourglass-fill"} {...others} />);
}

export default Component;
