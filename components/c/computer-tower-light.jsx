import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yxwru6blc {
  fill: currentColor;
  d: path("M166 72a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m46-58v176a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h128a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v176a2 2 0 0 0 2 2h128a2 2 0 0 0 2-2Zm-66 130a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="yxwru6blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:computer-tower-light"} {...others} />);
}

export default Component;
