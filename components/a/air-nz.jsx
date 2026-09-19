import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ghgd94b6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.375 26.972H6.592S9.382 42.5 18.48 42.5c7.764 0 6.066-9.058 1.577-9.058c-3.477 0-3.073 3.114-1.092 2.548m22.443-14.962H9.625S19.33 5.5 28.428 5.5c7.764 0 6.065 9.058 1.577 9.058c-3.478 0-3.073-3.114-1.092-2.548");
}
</style><path class="ghgd94b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:air-nz"} {...others} />);
}

export default Component;
