import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gs7khjboq {
  fill: currentColor;
  d: path("M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="gs7khjboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:lock-open-thin"} {...others} />);
}

export default Component;
