import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zvvg0wb4x {
  d: path("M208 132H48a20.023 20.023 0 0 0-20 20v48a20.023 20.023 0 0 0 20 20h160a20.023 20.023 0 0 0 20-20v-48a20.023 20.023 0 0 0-20-20zm-4 64H52v-40h152zm4-160H48a20.023 20.023 0 0 0-20 20v48a20.023 20.023 0 0 0 20 20h160a20.023 20.023 0 0 0 20-20V56a20.023 20.023 0 0 0-20-20zm-4 64H52V60h152z");
  fill: currentColor;
}
</style><path class="zvvg0wb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rectangles-two-bold"} {...others} />);
}

export default Component;
