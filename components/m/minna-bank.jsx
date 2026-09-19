import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p5t1l7g6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.295v2.846h3.558V35.86H5.5v2.846h37V35.86h-3.558V12.141H42.5V9.295zm9.724 2.846h5.693v23.718h-5.693zm11.86 0h5.692v23.718h-5.693z");
}
</style><path class="p5t1l7g6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:minna-bank"} {...others} />);
}

export default Component;
