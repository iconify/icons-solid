import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xeh0vxgla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 42.5L42.5 14.75m-18.5 0l9.25-9.25M5.5 33.25l16-16m2.5 16l9.25 9.25M5.5 14.75l16 16M14.75 5.5L42.5 33.25");
}
</style><path class="xeh0vxgla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simplex"} {...others} />);
}

export default Component;
