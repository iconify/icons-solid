import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgo3jbbpp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 2.75q2 0 2 2v14.5q0 2-2 2t-2-2V4.75q0-2 2-2m-3.25 6q0-2-2-2t-2 2v10.5q0 2 2 2t2-2zm-7.25 2q2 0 2 2v6.5q0 2-2 2t-2-2v-6.5q0-2 2-2m-3.25 6q0-2-2-2t-2 2v2.5q0 2 2 2t2-2z");
}
</style><path class="fgo3jbbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:signal-edge"} {...others} />);
}

export default Component;
