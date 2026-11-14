import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yvpf5yk4e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 9.25V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q3.574 1.75 3.5 1.75t-.146.014t-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146v19q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-3.25h15.5v3.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-19q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v6.75h-8.188q.188-.531.188-1.25q0-2.75-2.75-2.75h-.5Q5.75 5.25 5.75 8q0 .719.188 1.25zm7.312 7.5q.188-.531.188-1.25q0-2.75-2.75-2.75h-.5q-2.75 0-2.75 2.75q0 .719.188 1.25H4.25v-6h15.5v6z");
}
</style><path class="yvpf5yk4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:crew-rest-bunk"} {...others} />);
}

export default Component;
