import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nvsziacie {
  fill: currentColor;
  d: path("M200 60H32a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h168a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20m12 116a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h168a12 12 0 0 1 12 12Zm40-80v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-116.6 29.9a4 4 0 0 1 .18 3.89l-16 32A4 4 0 0 1 116 164a4.1 4.1 0 0 1-1.79-.42a4 4 0 0 1-1.79-5.37L125.53 132H100a4 4 0 0 1-3.58-5.79l16-32a4 4 0 1 1 7.16 3.58L106.47 124H132a4 4 0 0 1 3.4 1.9");
}
</style><path class="nvsziacie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-charging-thin"} {...others} />);
}

export default Component;
