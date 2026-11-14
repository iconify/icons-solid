import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.namin-o5f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 7.75q0-1.553 1.098-2.652Q4.947 4 6.5 4q3.75 0 3.75 3.75T6.5 11.5T2.75 7.75M17.5 4q-3.75 0-3.75 3.75t3.75 3.75t3.75-3.75T17.5 4M1.75 18.5q0-1.968 1.391-3.359T6.5 13.75t3.359 1.391q1.118 1.118 1.337 2.609h1.608q.219-1.491 1.337-2.609q1.391-1.391 3.359-1.391t3.359 1.391T22.25 18.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-19q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146m4.75-3.25q-2.85 0-3.201 2.5h6.402q-.351-2.5-3.201-2.5m11 0q-2.85 0-3.201 2.5h6.402q-.351-2.5-3.201-2.5");
}
</style><path class="namin-o5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:co-presence"} {...others} />);
}

export default Component;
