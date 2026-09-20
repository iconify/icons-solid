import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jbqj-obgz {
  fill: currentColor;
  d: path("M61.45 173.43a6 6 0 0 0 8-2.88L86.63 134h82.74l17.2 36.55A6 6 0 0 0 192 174a5.9 5.9 0 0 0 2.55-.57a6 6 0 0 0 2.88-8l-64-136a6 6 0 0 0-10.86 0l-64 136a6 6 0 0 0 2.88 8M128 46.09L163.72 122H92.28ZM222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6");
}
</style><path class="jbqj-obgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-a-underline-light"} {...others} />);
}

export default Component;
