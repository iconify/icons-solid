import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tv_bh2b7d {
  fill: currentColor;
  d: path("M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160");
}
</style><path class="tv_bh2b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-five"} {...others} />);
}

export default Component;
