import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.akg_bdb3n {
  fill: currentColor;
  d: path("M240 72a8 8 0 0 1-8 8H96v116.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L80 196.69V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
}
</style><path class="akg_bdb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-left-down"} {...others} />);
}

export default Component;
