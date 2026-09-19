import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t7lyubpyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.934 18.915l-7.994 9.814h4.647l-3.346 8.425l8.32-10.315l-4.304-.14zM37.04 5.5v9.295m4.648-4.647h-9.295");
}

.u84a5e4ze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.1 42.5C-5.113 28.542 9.192 7.999 20.823 17.904c11.63-9.906 26.585 10.498.37 24.455");
}
</style><path class="u84a5e4ze"/><path class="t7lyubpyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:defikataster"} {...others} />);
}

export default Component;
