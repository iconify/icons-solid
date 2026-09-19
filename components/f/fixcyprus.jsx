import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fu6c81b7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.269 43.5h31.462m-3.479 0l-9.191-39h-5.703l-9.19 39m22.034-6.807H14.217m18.145-8.462H16.058m14.464-8.462H17.898m10.784-8.462h-8.944");
}
</style><path class="fu6c81b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fixcyprus"} {...others} />);
}

export default Component;
