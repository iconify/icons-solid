import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w4lzw8bba {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.643 38.47c0 4.393 4.217 6.685 9.46 3.64l21.672-12.593c2.23-1.296 3.582-3.059 3.582-5.517s-1.352-4.221-3.582-5.517L16.103 5.891c-5.243-3.046-9.46-.754-9.46 3.64z");
}
</style><path class="w4lzw8bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nuvio"} {...others} />);
}

export default Component;
