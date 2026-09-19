import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j2k4ipbcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 37.67a13.994 13.994 0 0 1 0-27.34V2.733a21.474 21.474 0 0 0 0 42.534Zm6-34.937v7.597a13.994 13.994 0 0 1 0 27.34v7.597a21.474 21.474 0 0 0 0-42.534");
}
</style><path class="j2k4ipbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ausweisapp"} {...others} />);
}

export default Component;
