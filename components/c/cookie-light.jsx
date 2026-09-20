import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.j5vo3acnq {
  fill: currentColor;
  d: path("M163.07 164.93a10 10 0 1 1-14.14 0a10 10 0 0 1 14.14 0m-78.14-8a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0m6.14-41.86a10 10 0 1 0-14.14 0a10 10 0 0 0 14.14 0m33.86 1.86a10 10 0 1 0 14.14 0a10 10 0 0 0-14.14 0M230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6a42 42 0 0 0 42 42a6 6 0 0 1 6 6m-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53a90 90 0 1 0 95.47 95.48Z");
}
</style><path class="j5vo3acnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cookie-light"} {...others} />);
}

export default Component;
