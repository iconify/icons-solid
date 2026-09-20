import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wi98cxe4x {
  fill: currentColor;
  d: path("M51.85 148.74L173.29 104L51.85 59.26a12 12 0 0 1 8.3-22.52l152 56a12 12 0 0 1 0 22.52l-152 56a12 12 0 1 1-8.3-22.52M208 188H56a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24");
}
</style><path class="wi98cxe4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:greater-than-or-equal-bold"} {...others} />);
}

export default Component;
