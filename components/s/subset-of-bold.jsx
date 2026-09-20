import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.j2raqq3sz {
  fill: currentColor;
  d: path("M212 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-12-52h-96a44 44 0 0 1 0-88h96a12 12 0 0 0 0-24h-96a68 68 0 0 0 0 136h96a12 12 0 0 0 0-24");
}
</style><path class="j2raqq3sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-of-bold"} {...others} />);
}

export default Component;
