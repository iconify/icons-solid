import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5qwubcff {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3.75H6q-1.76 0-3.005 1.245T1.75 8v8q0 1.76 1.245 3.005T6 20.25h12q1.76 0 3.005-1.245T22.25 16V8q0-1.76-1.245-3.005T18 3.75m-1 3q2.25 0 2.25 2.25T17 11.25T14.75 9T17 6.75M14.75 15q0-2.25 2.25-2.25T19.25 15T17 17.25T14.75 15");
}
</style><path class="o5qwubcff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:amplifier"} {...others} />);
}

export default Component;
