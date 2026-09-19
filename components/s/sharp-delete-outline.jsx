import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zg17xbcfe {
  fill: currentColor;
  d: path("M6 21h12V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z");
}
</style><path class="zg17xbcfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-delete-outline"} {...others} />);
}

export default Component;
