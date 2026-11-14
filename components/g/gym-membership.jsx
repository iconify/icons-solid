import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f4f4syb1u {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 5.25q2.75 0 2.75 2.75v3.25h8.5V8q0-2.75 2.75-2.75T21.75 8v8q0 2.75-2.75 2.75T16.25 16v-3.25h-8.5V16q0 2.75-2.75 2.75T2.25 16V8q0-2.75 2.75-2.75");
}
</style><path class="f4f4syb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:gym-membership"} {...others} />);
}

export default Component;
