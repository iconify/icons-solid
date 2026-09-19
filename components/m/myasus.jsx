import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h5e3hy6cd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.535 17.552v19.462");
}

.p024l5x7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.371 10.64h-7.545L4.5 37.36h7.545zm16.129 0h-7.545L20.629 37.36h7.545zm0 0v26.374H33.265");
}

.zm3xl_xmm {
  cx: 33.265px;
  cy: 34.324px;
  r: 2.69px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="p024l5x7k"/><circle class="zm3xl_xmm"/><path class="h5e3hy6cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myasus"} {...others} />);
}

export default Component;
