import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xhdo_p9cw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.875 3.25H9q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T8.25 4v16q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014H6.875q-2.123 0-3.624-1.501T1.75 15.625v-7.25q0-2.123 1.501-3.624T6.875 3.25M9 20.75q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141T9.75 20V4q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q9.074 3.25 9 3.25h8.125q2.123 0 3.624 1.501t1.501 3.624v7.25q0 2.123-1.501 3.624t-3.624 1.501zM6.5 11.5V8q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T5 8v3.5q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146");
}
</style><path class="xhdo_p9cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:sidebar-mini"} {...others} />);
}

export default Component;
