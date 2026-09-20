import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.to5lqqbmj {
  fill: currentColor;
  d: path("m250 121.34l-45.64-68.43A20 20 0 0 0 187.72 44H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h147.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H44V68h141.58l40 60Z");
}
</style><path class="to5lqqbmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tag-simple-bold"} {...others} />);
}

export default Component;
