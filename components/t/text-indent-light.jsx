import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l22tdvb1p {
  fill: currentColor;
  d: path("M222 128a6 6 0 0 1-6 6H112a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6M112 70h104a6 6 0 0 0 0-12H112a6 6 0 0 0 0 12m104 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M35.76 140.24a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48l-40-40a6 6 0 0 0-8.48 8.48L71.51 96l-35.75 35.76a6 6 0 0 0 0 8.48");
}
</style><path class="l22tdvb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-indent-light"} {...others} />);
}

export default Component;
