import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zniix3bge {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.75 14.174V21.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T5 22.25t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-19q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q4.926 1.75 5 1.75t.146.014t.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v.326q.337-.076.75-.076h11q2.25 0 2.25 2.25v7q0 2.25-2.25 2.25h-11q-.413 0-.75-.076");
}
</style><path class="zniix3bge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:flag-diagonal-half"} {...others} />);
}

export default Component;
