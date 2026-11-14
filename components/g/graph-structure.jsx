import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zxayai5td {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 1.75h1.75q3.182 0 3.364 3h3.522q.182-3 3.364-3h1.75q3.375 0 3.375 3.375v.75q0 3.375-3.375 3.375h-1.75q-3.182 0-3.364-3h-3.522q-.182 3-3.364 3H6.75v8.5h7.011q.182-3 3.364-3h1.75q3.375 0 3.375 3.375v.75q0 3.375-3.375 3.375h-1.75q-3.182 0-3.364-3H6q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V9.25h-.125q-3.375 0-3.375-3.375v-.75q0-3.375 3.375-3.375");
}
</style><path class="zxayai5td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:graph-structure"} {...others} />);
}

export default Component;
