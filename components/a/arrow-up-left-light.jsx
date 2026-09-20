import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fh6_xwolz {
  fill: currentColor;
  d: path("M196.24 196.24a6 6 0 0 1-8.48 0L70 78.48V168a6 6 0 0 1-12 0V64a6 6 0 0 1 6-6h104a6 6 0 0 1 0 12H78.48l117.76 117.76a6 6 0 0 1 0 8.48");
}
</style><path class="fh6_xwolz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-up-left-light"} {...others} />);
}

export default Component;
