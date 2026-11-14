import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hu5iz60-j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 8.121V19q0 2.25 2.25 2.25h10.879q1.504 0 2.079-1.39t-.489-2.451L7.091 6.531Q6.029 5.467 4.64 6.042T3.25 8.121m4 7.379v-.75q0-1.137 1.039-1.6t1.884.297l1.471 1.324q.873.785.452 1.883t-1.597 1.096H9.5q-2.25 0-2.25-2.25");
}
</style><path class="hu5iz60-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:set-square"} {...others} />);
}

export default Component;
