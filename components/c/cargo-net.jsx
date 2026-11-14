import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwo159bag {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3.25H6Q3.25 3.25 3.25 6v9q0 2.75 2.75 2.75h12q2.75 0 2.75-2.75V6q0-2.75-2.75-2.75m3 16q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T2.25 20t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T3 19.25z");
}
</style><path class="mwo159bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cargo-net"} {...others} />);
}

export default Component;
