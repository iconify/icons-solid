import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uo-hh0bag {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.75 16.25v3.25q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T3 20.25t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-15q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q2.926 3.75 3 3.75t.146.014t.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v5.25h1.438Q5 9.219 5 8.5q0-2.75 2.75-2.75h1.5Q12 5.75 12 8.5q0 .719-.188 1.25H19q2.75 0 2.75 2.75v7q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-3.25zm13.675-1.5h2.825V12.5q0-1.25-1.25-1.25h-3.675zm-3.85-3.5H3.75v3.5h11.925z");
}
</style><path class="uo-hh0bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:bed-making"} {...others} />);
}

export default Component;
