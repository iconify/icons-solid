import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ygcy4ztxv {
  fill: var(--svg-color--f27a52, #f27a52);
  d: path("M2.018 32L32 2.019l29.981 29.98L32 61.982z");
}
</style><path class="ygcy4ztxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:large-orange-diamond"} {...others} />);
}

export default Component;
