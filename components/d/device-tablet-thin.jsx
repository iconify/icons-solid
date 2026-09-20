import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rzyde39pf {
  fill: currentColor;
  d: path("M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M52 68h152v120H52Zm12-32h128a12 12 0 0 1 12 12v12H52V48a12 12 0 0 1 12-12m128 184H64a12 12 0 0 1-12-12v-12h152v12a12 12 0 0 1-12 12");
}
</style><path class="rzyde39pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:device-tablet-thin"} {...others} />);
}

export default Component;
