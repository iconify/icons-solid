import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gbit84k6k {
  fill: currentColor;
  d: path("M180 112a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m44-92v160a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12M48 212h28V44H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4M212 48a4 4 0 0 0-4-4H84v168h124a4 4 0 0 0 4-4Z");
}
</style><path class="gbit84k6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notebook-thin"} {...others} />);
}

export default Component;
