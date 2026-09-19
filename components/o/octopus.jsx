import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jhkb9fbwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.975 19.715c1.322-6.796 10.496-12.096 13.936-7.013c2.646 3.909-3.908 9.201-14.071 8.9c-10.184-.301-15.548-1.4-19.845 1.383c-4.27 2.767-5.773 7.938-3.307 11.486s10.583 4.39 16.176-1.022S28.084 24 28.084 24");
}
</style><path class="jhkb9fbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:octopus"} {...others} />);
}

export default Component;
