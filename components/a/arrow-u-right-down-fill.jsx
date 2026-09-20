import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yhbvkibjt {
  fill: currentColor;
  d: path("m221.66 181.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 120 168h40V88a48 48 0 0 0-96 0v88a8 8 0 0 1-16 0V88a64 64 0 0 1 128 0v80h40a8 8 0 0 1 5.66 13.66");
}
</style><path class="yhbvkibjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-right-down-fill"} {...others} />);
}

export default Component;
