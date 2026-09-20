import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n23sc8cvg {
  fill: currentColor;
  d: path("M7 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="n23sc8cvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-dots-horizontal-24-regular"} {...others} />);
}

export default Component;
