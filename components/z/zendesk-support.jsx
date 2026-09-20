import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hfwzo-b1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.95l18.2-20.8v20.8zm20.8 0a9.1 9.1 0 1 1 18.2 0zm18.2-29.9l-18.2 20.8V9.05zm-20.8 0a9.1 9.1 0 1 1-18.2 0z");
}
</style><path class="hfwzo-b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zendesk-support"} {...others} />);
}

export default Component;
