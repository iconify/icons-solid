import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ozvo0konv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.571 10.56L6.57 14.557v18.897L23.999 43.5V31.08m10.43 6.36l7.002-3.996V14.547L24.001 4.5v12.42");
}
</style><path class="ozvo0konv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xiaoheihe"} {...others} />);
}

export default Component;
