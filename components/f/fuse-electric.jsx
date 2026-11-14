import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7_gf9b6k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.375 7.75h-6.75q-1.398 0-2.386.989q-.989.988-.989 2.386v.125h13.5v-.125q0-3.375-3.375-3.375m3.375 5H5.25v.125q0 3.375 3.375 3.375h6.75q3.375 0 3.375-3.375z");
}
</style><path class="k7_gf9b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:fuse-electric"} {...others} />);
}

export default Component;
