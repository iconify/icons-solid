import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p84t_su2z {
  fill: currentColor;
  d: path("M208 136H48a20 20 0 0 0-20 20v36a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-36a20 20 0 0 0-20-20m-4 52H52v-28h152Zm4-144H48a20 20 0 0 0-20 20v36a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 52H52V68h152Z");
}
</style><path class="p84t_su2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rows-bold"} {...others} />);
}

export default Component;
