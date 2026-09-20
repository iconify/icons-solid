import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aw7urpb4h {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h20v20a4 4 0 0 0 8 0v-20h120v20a4 4 0 0 0 8 0v-20h20a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m0 152H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v68h-24.19a44 44 0 1 0 0 8H220v60a4 4 0 0 1-4 4m-52.7-72a12 12 0 1 0 0 8h24.47a36 36 0 1 1 0-8Z");
}
</style><path class="aw7urpb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vault-thin"} {...others} />);
}

export default Component;
