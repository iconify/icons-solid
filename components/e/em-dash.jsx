import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2_q0pb4e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 9.75h16q2.25 0 2.25 2.25T20 14.25H4q-2.25 0-2.25-2.25T4 9.75");
}
</style><path class="i2_q0pb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:em-dash"} {...others} />);
}

export default Component;
