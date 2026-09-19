import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_k29fntd {
  fill: currentColor;
  d: path("M22 12v8H2V4h12v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3m-10.53 5.12l-2.83 2.83l1.41 1.41l2.83-2.83L15 15.66V10H9.34z");
}
</style><path class="l_k29fntd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-pin-invoke"} {...others} />);
}

export default Component;
