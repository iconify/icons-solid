import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iwfhyd6xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.274 27.084c0 2.787 6.593 5.047 14.726 5.047s14.726-2.26 14.726-5.047");
}

.t7bys2izl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5c6.65 0 14.432-4.755 14.706-13.747C39.08 17.5 34.15 4.5 24 4.5S8.92 17.5 9.294 29.753C9.568 38.745 17.35 43.5 24 43.5");
}
</style><path class="t7bys2izl"/><path class="iwfhyd6xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hatch-sleep"} {...others} />);
}

export default Component;
