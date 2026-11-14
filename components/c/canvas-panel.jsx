import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g68vw6bvs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 2.25H5.25q-2.5 0-2.5 2.5v14.5q0 1.036.732 1.768t1.768.732h13.5q1.036 0 1.768-.732t.732-1.768V4.75q0-2.5-2.5-2.5M8 5.25h8q2.25 0 2.25 2.25v9q0 2.25-2.25 2.25H8q-2.25 0-2.25-2.25v-9q0-2.25 2.25-2.25");
}
</style><path class="g68vw6bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:canvas-panel"} {...others} />);
}

export default Component;
