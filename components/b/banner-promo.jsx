import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m8z-0bx_j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 4.75H6.875q-2.123 0-3.624 1.501T1.75 9.875v4.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-4.25q0-2.123-1.501-3.624T17.125 4.75M15 9.25h3.75q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H15q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T14.25 10t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T15 9.25m3 4q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T14.25 14t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014z");
}
</style><path class="m8z-0bx_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:banner-promo"} {...others} />);
}

export default Component;
