import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.icpuezbao {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 14.68q-1.182 1.212-1.247 2.948q-.071 1.912 1.257 3.289T12 22.295t3.24-1.378q1.328-1.377 1.257-3.289q-.065-1.736-1.247-2.948V7q0-3.25-3.25-3.25T8.75 7zm4 3.07q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T12 18.5t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V9.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T12 8.75t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146z");
}
</style><path class="icpuezbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:baby-thermometer"} {...others} />);
}

export default Component;
