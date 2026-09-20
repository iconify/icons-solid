import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zp810da8c {
  fill: currentColor;
  d: path("M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M46 126h164v20H46Zm0 32h164v20H46ZM94 56a34 34 0 0 1 68 0v26H94ZM48 94h160a2 2 0 0 1 2 2v18H46V96a2 2 0 0 1 2-2m160 116H48a2 2 0 0 1-2-2v-18h164v18a2 2 0 0 1-2 2");
}
</style><path class="zp810da8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:lock-laminated-light"} {...others} />);
}

export default Component;
