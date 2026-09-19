import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.frqs4sfns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.21 16.71a12.21 12.21 0 0 0-24.42 0v5h24.42v9.58a12.21 12.21 0 0 1-24.42 0v-2.54");
}
</style><path class="frqs4sfns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simplisafe"} {...others} />);
}

export default Component;
