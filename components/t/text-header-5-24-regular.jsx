import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzkqffb1a {
  fill: currentColor;
  d: path("M10.75 5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V12.5H3.5v5.75a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 1.5 0V11H10V5.75a.75.75 0 0 1 .75-.75m9.499-.001a.751.751 0 0 1 0 1.501h-4.571l-.35 3.487c.205-.002.433-.006.67-.007c.774-.003 1.727.005 2.162.066l.241.04a4.75 4.75 0 1 1-5.361 6.303a.75.75 0 0 1 1.407-.518a3.25 3.25 0 1 0 3.669-4.312l-.165-.028c-.303-.042-1.128-.054-1.947-.05c-.395.001-.767.006-1.041.01q-.224.006-.446.008a.752.752 0 0 1-.764-.824l.5-5A.75.75 0 0 1 15 5z");
}
</style><path class="hzkqffb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-header-5-24-regular"} {...others} />);
}

export default Component;
