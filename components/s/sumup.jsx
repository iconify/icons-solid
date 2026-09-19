import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ggv_6db4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.23 28.604c-5.535-5.514-5.535-14.454 0-19.968s14.51-5.515 20.046 0zm-4.506 10.76c5.535 5.515 14.51 5.515 20.046 0s5.535-14.454 0-19.968z");
}
</style><path class="ggv_6db4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sumup"} {...others} />);
}

export default Component;
