import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.meq2mybzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.146 30.855H3.622v-13.71h13.525l13.708 13.71m-13.708 0h13.708v13.523h-13.71V33.746");
}

.nocrnxd3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.145 17.147V3.622h13.71v13.525zm13.71-.002h13.523v13.71H30.855z");
}
</style><path class="nocrnxd3w"/><path class="meq2mybzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ram-hospital"} {...others} />);
}

export default Component;
