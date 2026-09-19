import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.nuxp-hbap {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.699 22.392a28 28 0 0 1 1.74-3.823L45.433 56.56a28 28 0 0 1-3.824 1.741zM18.568 7.439a28 28 0 0 1 3.823-1.74L58.3 41.608a28 28 0 0 1-1.74 3.823z");
}
</style><path class="nuxp-hbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-trinidad-and-tobago"} {...others} />);
}

export default Component;
