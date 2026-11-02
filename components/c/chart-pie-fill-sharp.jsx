import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cd560hbwb {
  fill: currentColor;
  d: path("M11 2.049V13h.586l6.743 6.744A10 10 0 0 1 2.26 9.735A10 10 0 0 1 11 2.049M13 11V2.049A10.01 10.01 0 0 1 21.951 11Zm5.321 5.906l-1.025-1.024l-.003-.003L14.414 13h7.537a10 10 0 0 1-2.207 5.329Z");
}
</style><path class="cd560hbwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-pie-fill-sharp"} {...others} />);
}

export default Component;
