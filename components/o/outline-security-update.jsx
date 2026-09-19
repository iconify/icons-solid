import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qe30z3rue {
  fill: currentColor;
  d: path("M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zM7 4V3h10v1zm9 8l-4 4l-4-4l1.41-1.41L11 12.17V8h2v4.17l1.59-1.59z");
}
</style><path class="qe30z3rue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-security-update"} {...others} />);
}

export default Component;
