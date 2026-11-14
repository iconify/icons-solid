import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbqc8oyok {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v8q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75zm12.25 5.75q0-3-3-3t-3 3t3 3q.97 0 1.626-.313l1.094 1.093q.105.106.243.163t.287.057t.287-.057t.243-.163q.053-.052.094-.113t.069-.13t.043-.141T15.5 16t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113l-1.093-1.094q.313-.656.313-1.626");
}
</style><path class="bbqc8oyok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:search-folder"} {...others} />);
}

export default Component;
