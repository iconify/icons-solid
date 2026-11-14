import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhfryqjpw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.49 22.05Q4.25 15.327 4.25 9.5q0-3.21 2.27-5.48T12 1.75t5.48 2.27t2.27 5.48q0 5.827-7.24 12.55q-.051.047-.111.085q-.059.037-.125.063q-.065.026-.134.039q-.07.013-.14.013t-.14-.013t-.134-.039q-.066-.026-.125-.063q-.06-.038-.111-.085");
}
</style><path class="hhfryqjpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:issue-pin"} {...others} />);
}

export default Component;
