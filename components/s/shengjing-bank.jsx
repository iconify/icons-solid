import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mlk1k057n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.5 5.5v12h-2a2 2 0 0 0-2 2v2h-12v-7a9 9 0 0 1 9-9zm5 0v12h2a2 2 0 0 1 2 2v2h12v-7a9 9 0 0 0-9-9zm0 37v-12h2a2 2 0 0 0 2-2v-2h12v7a9 9 0 0 1-9 9zm-5 0v-12h-2a2 2 0 0 1-2-2v-2h-12v7a9 9 0 0 0 9 9z");
}
</style><path class="mlk1k057n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shengjing-bank"} {...others} />);
}

export default Component;
