import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v9vbsf1ny {
  fill: currentColor;
  d: path("M11.213 12.213q.287-.288.287-.713t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287t.713-.288m3 0q.287-.287.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287t.713-.288m-6 0q.287-.287.287-.712t-.288-.712T7.5 10.5t-.712.288t-.288.712t.288.713t.712.287t.713-.288m9 0q.287-.287.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287t.713-.288M4 21v-2H2V4h20v15h-2v2h-1l-.65-2H5.675L5 21zm0-4h16V6H4zm8-5.5");
}
</style><path class="v9vbsf1ny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-with-assistant-outline-sharp"} {...others} />);
}

export default Component;
