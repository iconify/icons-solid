import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tphuu_b9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.398 16.294h8.477l-8.898 15.412H4.5zm21.625 0H43.5l-8.898 15.412h-8.477zm-5.819 0c1.707 0 2.561 1.517 1.463 3.443l-5.677 9.95c-.64 1.122-2.207 2.007-3.499 2.02H15.26l9.036-15.413z");
}
</style><path class="tphuu_b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:digihaat"} {...others} />);
}

export default Component;
