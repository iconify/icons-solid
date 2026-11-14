import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fuverubju {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 1.75h10q1.76 0 3.005 1.245T21.25 6v.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-17q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146V6q0-1.76 1.245-3.005T7 1.75M2.75 6.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h17q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v5q0 1.76-1.245 3.005T17 15.75H7q-1.76 0-3.005-1.245T2.75 11.5zM12 17.25q-7.25 0-7.25 2.5t7.25 2.5t7.25-2.5t-7.25-2.5");
}
</style><path class="fuverubju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:floating-window"} {...others} />);
}

export default Component;
