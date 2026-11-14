import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf5krxbmm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m6.842 2.546Q4.75 14.002 4.75 12t3.842-2.546q.182-.238.403-.459Q10.24 7.75 12 7.75t3.005 1.245q.221.221.403.459Q19.25 9.998 19.25 12t-3.842 2.546q-.182.238-.403.459Q13.76 16.25 12 16.25t-3.005-1.245q-.221-.221-.403-.459");
}
</style><path class="cf5krxbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:astronaut-badge"} {...others} />);
}

export default Component;
