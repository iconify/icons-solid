import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nl7ck7zzm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 11.25h16q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H4q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q3.25 12.074 3.25 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T4 11.25");
}
</style><path class="nl7ck7zzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:minus"} {...others} />);
}

export default Component;
