import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk5o7ccwq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3.75H6q-1.76 0-3.005 1.245T1.75 8v8q0 1.76 1.245 3.005T6 20.25h12q1.76 0 3.005-1.245T22.25 16V8q0-1.76-1.245-3.005T18 3.75M4.5 15q0-1.036.732-1.768q.732-.733 1.768-.733t1.768.733T9.5 15q.001 1.036-.732 1.768q-.732.733-1.768.733t-1.768-.733Q4.5 16.036 4.5 15");
}
</style><path class="nk5o7ccwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:negative-space"} {...others} />);
}

export default Component;
