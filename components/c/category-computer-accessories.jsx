import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tv51b628z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 2.75q2.382 0 4.066 1.684T17.75 8.5V10q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T17 9.25h-4.25V3.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q12.074 2.75 12 2.75m-.75 6.5V3.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014q-2.382 0-4.066 1.684T6.25 8.5v5q0 2.382 1.684 4.066T12 19.25t4.066-1.684T17.75 13.5V10q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H7q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T6.25 10t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T7 9.25z");
}
</style><path class="tv51b628z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:category-computer-accessories"} {...others} />);
}

export default Component;
