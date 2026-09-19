import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o39btibjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.775 16.475V5.725c0-4.3 6.45-4.3 6.45 0v10.75l4.3-4.3c3.225-3.225 7.525 1.075 4.3 4.3l-4.3 4.3m-15.05 6.45H5.725c-4.3 0-4.3-6.45 0-6.45h10.75l-4.3-4.3c-3.225-3.225 1.075-7.525 4.3-4.3l4.3 4.3m6.45 15.05v10.75c0 4.3-6.45 4.3-6.45 0v-10.75l-4.3 4.3c-3.225 3.225-7.525-1.075-4.3-4.3l4.3-4.3m15.05-6.45h10.75c4.3 0 4.3 6.45 0 6.45h-10.75l4.3 4.3c3.225 3.225-1.075 7.525-4.3 4.3l-4.3-4.3");
}
</style><path class="o39btibjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alpe-dhuez"} {...others} />);
}

export default Component;
