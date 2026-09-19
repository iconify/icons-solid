import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ehsi7sbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.553 15.573L17.548 5.5l3.949 6.692l7.31 3.162l.943 3.666l10.697 6.285l-3.184 6.273l-3.421 1.83l-16.467.047l-7.44 9.034l-2.293.011z");
}
</style><path class="ehsi7sbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myfidelidade"} {...others} />);
}

export default Component;
