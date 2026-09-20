import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w330l1b1h {
  fill: currentColor;
  d: path("M3 20V3h16v7.075q-.25-.05-.5-.062T18 10t-.5.013t-.5.062V5H5v10h7.075q-.05.25-.062.5T12 16t.013.5t.062.5H6zM7 9h8V7H7zm0 4h5v-2H7zm10 7v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 15V5z");
}
</style><path class="w330l1b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-add-on-outline-sharp"} {...others} />);
}

export default Component;
