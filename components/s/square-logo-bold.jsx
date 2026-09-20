import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u4cplnbmu {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM96 172h64a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12m12-64h40v40h-40Z");
}
</style><path class="u4cplnbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-logo-bold"} {...others} />);
}

export default Component;
