import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nmz5rtbvd {
  fill: currentColor;
  d: path("M140 200a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-44a4 4 0 0 0 4-4V48a4 4 0 0 0-8 0v104a4 4 0 0 0 4 4");
}
</style><path class="nmz5rtbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:exclamation-mark-thin"} {...others} />);
}

export default Component;
