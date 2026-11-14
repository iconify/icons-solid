import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfdlghbmk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.5 3.75H18q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T18 5.25h-2.959l-4.5 13.5H14q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H6q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T6 18.75h2.959l4.5-13.5H10q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T9.25 4.5t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014z");
}
</style><path class="nfdlghbmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:italic"} {...others} />);
}

export default Component;
