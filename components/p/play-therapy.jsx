import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x68kc4ast {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 5.75H7q-2.5 0-2.5 2.5v2q0 .541.2 1h-.45q-2.5 0-2.5 2.5v2q0 2.5 2.5 2.5h2q1.131 0 1.75-.511q.619.511 1.75.511h2q2.5 0 2.5-2.5v-2q0-2.5-2.5-2.5h-.45q.2-.459.2-1v-2q0-1.036-.732-1.768T9 5.75M15.5 15q0-3.25 3.25-3.25T22 15t-3.25 3.25T15.5 15");
}
</style><path class="x68kc4ast"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:play-therapy"} {...others} />);
}

export default Component;
