import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wbk0ktbda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 26.004h5.266V42.5H10.5zM21.367 5.5h5.266v37h-5.266zm10.867 12.116H37.5V42.5h-5.266z");
}
</style><path class="wbk0ktbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-data-manager"} {...others} />);
}

export default Component;
