import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r0r5mrb_e {
  fill: currentColor;
  d: path("M3 14.5v-1h4.058v1zm0-4v-1h17v1zm6.442 4v-1h4.116v1zm6.5 0v-1H20v1z");
}
</style><path class="r0r5mrb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:power-input"} {...others} />);
}

export default Component;
