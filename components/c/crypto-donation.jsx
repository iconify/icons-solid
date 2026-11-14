import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xotq0lbzi {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 4.75q0 3 3 3t3-3t-3-3t-3 3m2.584 17.374Q2.25 15.901 2.25 12.5q0-4.75 5-4.75q2.836 0 4.75 2.253q1.914-2.253 4.75-2.253q5 0 5 4.75q0 3.401-9.334 9.624q-.092.062-.199.094q-.106.032-.217.032t-.217-.032t-.199-.094m3.666-7.874q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043T9.5 15h5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146");
}
</style><path class="xotq0lbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:crypto-donation"} {...others} />);
}

export default Component;
