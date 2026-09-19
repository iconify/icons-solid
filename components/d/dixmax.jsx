import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hz-35lbcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.927 4.524L8.903 4.5c5.03 18.215 0 39 0 39l28.83-16.197c1.767-.993 1.83-3.513.115-4.592L13.702 7.518c1.818 3.902 4.654 10.81 4.606 15.803l1.55-3.417l7.854 4.435l-10.798 5.842C16.526 15.044 9.376 5.13 8.927 4.524L8.903 4.5");
}
</style><path class="hz-35lbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dixmax"} {...others} />);
}

export default Component;
