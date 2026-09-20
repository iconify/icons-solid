import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xfb26cb8g {
  fill: currentColor;
  d: path("M200 28h-40a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-32V52h32ZM96 28H56a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H60V52h32Z");
}
</style><path class="xfb26cb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pause-bold"} {...others} />);
}

export default Component;
