import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cujjr39is {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.75 3.25h-5.5q-2.485 0-4.243 1.757Q3.25 6.765 3.25 9.25v5.5q0 2.485 1.757 4.243Q6.765 20.75 9.25 20.75h5.5q2.485 0 4.243-1.757q1.757-1.758 1.757-4.243v-5.5q0-2.485-1.757-4.243Q17.235 3.25 14.75 3.25m1.25 8q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H8q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.25 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T8 11.25z");
}
</style><path class="cujjr39is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:checkbox-indeterminate"} {...others} />);
}

export default Component;
