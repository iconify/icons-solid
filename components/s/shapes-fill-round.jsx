import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lka41ng8b {
  fill: currentColor;
  d: path("M11.277 7.113A2.5 2.5 0 0 1 9.197 11H6.803a2.5 2.5 0 0 1-2.08-3.887L5.92 5.317a2.5 2.5 0 0 1 4.16 0Zm1.116 7.94a5.001 5.001 0 1 1 9.213 3.896a5.001 5.001 0 0 1-9.213-3.896M5 14h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3");
}
</style><path class="lka41ng8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shapes-fill-round"} {...others} />);
}

export default Component;
