import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o5m802bqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5A14.27 14.27 0 0 1 9.75 29.32C9.75 19.89 24 4.5 24 4.5s14.25 15.39 14.25 24.82A14.27 14.27 0 0 1 24 43.5");
}
</style><path class="o5m802bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ripple"} {...others} />);
}

export default Component;
