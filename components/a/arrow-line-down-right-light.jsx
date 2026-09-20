import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cq5gmob6t {
  fill: currentColor;
  d: path("M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-30 58a6 6 0 0 0-6 6v81.52L84.24 83.76a6 6 0 0 0-8.48 8.48L177.52 194H96a6 6 0 0 0 0 12h96a6 6 0 0 0 6-6v-96a6 6 0 0 0-6-6");
}
</style><path class="cq5gmob6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-right-light"} {...others} />);
}

export default Component;
