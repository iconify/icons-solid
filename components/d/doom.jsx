import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.it68olotg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.846 27.971l-7.278 5.465V14.564h7.278zm1.918-1.277l4.913 3.689l2.364-1.952V14.564h-7.277zm16.472 0l-4.913 3.689l-2.364-1.952V14.564h7.277zM6.568 14.564H4.5m36.932 18.872V14.564h-1.273l-2.421 15.452l-2.312-15.452h-1.272v13.407m7.278-13.407H43.5");
}
</style><path class="it68olotg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:doom"} {...others} />);
}

export default Component;
