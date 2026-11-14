import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.swfko2fxf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.125 1.75h-2.25q-2.123 0-3.624 1.501T1.75 6.875v2.25q0 2.123 1.501 3.624t3.624 1.501h.909q-.034.368-.034.75q0 3.003 2.123 5.127T15 22.25t5.127-2.123T22.25 15t-2.123-5.127T15 7.75q-.382 0-.75.034v-.909q0-2.123-1.501-3.624T9.125 1.75");
}
</style><path class="swfko2fxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:union-type"} {...others} />);
}

export default Component;
