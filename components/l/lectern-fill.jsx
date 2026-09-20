import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.sncwlrxfh {
  fill: currentColor;
  d: path("m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM192 120H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16");
}
</style><path class="sncwlrxfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:lectern-fill"} {...others} />);
}

export default Component;
