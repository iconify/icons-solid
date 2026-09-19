import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ird0rqbwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.25 4.5h6.5V11h6.5v32.5H7.75V11h19.5Zm0 6.5v6.51h-13V37h19.5V11Zm0 0");
}
</style><path class="ird0rqbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:imagingedgemobile"} {...others} />);
}

export default Component;
