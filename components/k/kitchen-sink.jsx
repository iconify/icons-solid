import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hszazb42v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.25 11.75V6.5q0-1.75-1.75-1.75T12.75 6.5v2q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043T12 9.25t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-2q0-3.25 3.25-3.25t3.25 3.25v5.25h3.75q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-1.25v4.25q0 2.75-2.75 2.75h-11q-2.75 0-2.75-2.75v-4.25H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141q-.014-.072-.014-.146t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014zm-11 1.5h13.5v4.25q0 1.25-1.25 1.25h-11q-1.25 0-1.25-1.25z");
}
</style><path class="hszazb42v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:kitchen-sink"} {...others} />);
}

export default Component;
