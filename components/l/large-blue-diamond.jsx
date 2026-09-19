import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.b8act2bim {
  fill: var(--svg-color--0071b8, #0071b8);
  d: path("M2.018 32L32 2.019l29.981 29.98L32 61.982z");
}
</style><path class="b8act2bim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:large-blue-diamond"} {...others} />);
}

export default Component;
