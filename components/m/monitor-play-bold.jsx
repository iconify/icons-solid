import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y6tl2cc1s {
  fill: currentColor;
  d: path("M168 120a12 12 0 0 1-5.12 9.83l-40 28A12 12 0 0 1 104 148V92a12 12 0 0 1 18.88-9.83l40 28A12 12 0 0 1 168 120m68-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Zm-52 152H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24");
}
</style><path class="y6tl2cc1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:monitor-play-bold"} {...others} />);
}

export default Component;
