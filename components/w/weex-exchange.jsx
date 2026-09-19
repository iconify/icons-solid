import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vh7glnnku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 14.25H11l-6.5 6.5l13 13l13-13l-6.5-6.5l-6.5 6.5l13 13l13-13l-6.5-6.5h-6.5");
}
</style><path class="vh7glnnku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:weex-exchange"} {...others} />);
}

export default Component;
