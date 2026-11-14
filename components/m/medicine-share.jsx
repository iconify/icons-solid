import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miu0r1buf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.5 6q0-3.5 3.5-3.5q1.45 0 2.475 1.025T21.5 6t-1.025 2.475T18 9.5q-2.257 0-3.058-1.455L10.25 10v2q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-6q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146V8q0-3.75 3.75-3.75T10.25 8v.375l4.277-1.782Q14.5 6.31 14.5 6M2.75 12q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h6q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v2l4.692 1.955Q15.743 14.5 18 14.5q1.45 0 2.475 1.025T21.5 18t-1.025 2.475T18 21.5q-3.5 0-3.5-3.5q0-.31.027-.593l-4.277-1.782V16q0 3.75-3.75 3.75q-1.553 0-2.652-1.098Q2.75 17.553 2.75 16z");
}
</style><path class="miu0r1buf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:medicine-share"} {...others} />);
}

export default Component;
