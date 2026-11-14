import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nh88xf_mg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m3.359.177l10.96 10.96q.66.659.66 1.591t-.66 1.592q-.659.659-1.591.659t-1.591-.66L4.929 8.111q-.66-.659-.66-1.591t.66-1.591q.659-.66 1.591-.66t1.591.66");
}
</style><path class="nh88xf_mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:forbidden"} {...others} />);
}

export default Component;
