import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zb082ibwb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.25 1.75H5.75q-1.036 0-1.768.732T3.25 4.25t.732 1.768t1.768.732v10.5q-2.5 0-2.5 2.5q0 1.036.732 1.768t1.768.732h12.5q1.036 0 1.768-.732t.732-1.768q0-2.5-2.5-2.5V6.75q1.036 0 1.768-.732t.732-1.768q0-2.5-2.5-2.5m-11 5h9.5v10.5h-9.5zm7.25 4.5h-5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T8.75 12t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="zb082ibwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:papyrus-scroll"} {...others} />);
}

export default Component;
