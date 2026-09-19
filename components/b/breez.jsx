import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w82xnab0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.507 22.766h13.206m-4.402-5.869h13.207M9.91 30.103h16.14M19.495 8.826h10.169A7.337 7.337 0 0 1 37 16.163h0a7.337 7.337 0 0 1-7.337 7.337H28.25m.001 0h4.41a7.337 7.337 0 0 1 7.337 7.337h0a7.337 7.337 0 0 1-7.336 7.337h-16.15m9.538 0V42m0-37v3.826");
}
</style><path class="w82xnab0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:breez"} {...others} />);
}

export default Component;
