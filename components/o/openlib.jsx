import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iqz1plbld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.4 5v14.25l3.2-4.222l3.2 4.222V5M12 43h24a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4");
}
</style><path class="iqz1plbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:openlib"} {...others} />);
}

export default Component;
