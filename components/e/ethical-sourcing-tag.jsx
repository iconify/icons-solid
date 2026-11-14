import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1qv_8blu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.125 2.75h4.288q1.398 0 2.386.989l6.375 6.375q2.386 2.386 0 4.772l-4.288 4.288q-2.386 2.386-4.772 0l-6.375-6.375q-.989-.988-.989-2.386V6.125q0-3.375 3.375-3.375M11.5 14.439L9.28 12.22q-.052-.053-.113-.094t-.13-.069t-.141-.043T8.75 12t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.106.105-.163.243T8 12.75t.057.287t.163.243l2.75 2.75q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l4-4q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094z");
}
</style><path class="i1qv_8blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:ethical-sourcing-tag"} {...others} />);
}

export default Component;
