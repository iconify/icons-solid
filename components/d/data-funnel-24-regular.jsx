import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ufv3qrm3f {
  fill: currentColor;
  d: path("M22.002 4.752a2.75 2.75 0 0 1-2.752 2.752H4.752a2.752 2.752 0 1 1 0-5.504H19.25a2.75 2.75 0 0 1 2.752 2.752m-2 7a2.75 2.75 0 0 1-2.752 2.752H6.752a2.752 2.752 0 1 1 0-5.504H17.25a2.75 2.75 0 0 1 2.752 2.752m-3 7a2.75 2.75 0 0 1-2.752 2.752H9.752a2.752 2.752 0 1 1 0-5.504h4.498a2.75 2.75 0 0 1 2.752 2.752m3.5-14c0-.692-.56-1.252-1.252-1.252H4.752a1.252 1.252 0 1 0 0 2.504H19.25c.692 0 1.252-.56 1.252-1.252m-2 7c0-.692-.56-1.252-1.252-1.252H6.752a1.252 1.252 0 0 0 0 2.504H17.25c.692 0 1.252-.56 1.252-1.252m-3 7c0-.691-.56-1.252-1.252-1.252H9.752a1.252 1.252 0 0 0 0 2.504h4.498c.691 0 1.252-.56 1.252-1.252");
}
</style><path class="ufv3qrm3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-funnel-24-regular"} {...others} />);
}

export default Component;
