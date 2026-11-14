import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_xb3_zza {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.625 2.25h-9.25q-2.123 0-3.624 1.501T2.25 7.375v9.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624v-9.25q0-2.123-1.501-3.624T16.625 2.25m-8.875 7h8.5q1.036 0 1.768.732t.732 1.768v.5q0 1.036-.732 1.768t-1.768.732h-8.5q-2.5 0-2.5-2.5v-.5q0-2.5 2.5-2.5");
}
</style><path class="g_xb3_zza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:signal-panel"} {...others} />);
}

export default Component;
