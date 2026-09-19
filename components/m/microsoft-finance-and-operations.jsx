import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ecm1igbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.449 17.7L21.531 29.618a.96.96 0 0 1-1.362 0L8.933 18.382a.96.96 0 0 1 0-1.363L20.169 5.784a.96.96 0 0 1 1.362 0L39.067 23.32a.96.96 0 0 1 0 1.362L21.531 42.217a.96.96 0 0 1-1.362 0L8.933 30.981a.96.96 0 0 1 0-1.362l11.236-11.237a.96.96 0 0 1 1.362 0L33.45 30.3");
}
</style><path class="ecm1igbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:microsoft-finance-and-operations"} {...others} />);
}

export default Component;
