import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.etxyfqbwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 34.113h-3.4a3.63 3.63 0 0 1-2.033-.622L9.933 14.51a3.63 3.63 0 0 0-2.033-.622H4.5");
}

.pqwl-zijb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 34.113h3.4c.725 0 1.433-.216 2.033-.622L38.067 14.51a3.63 3.63 0 0 1 2.032-.622H43.5");
}
</style><path class="etxyfqbwi"/><path class="pqwl-zijb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fujifilm-xapp"} {...others} />);
}

export default Component;
