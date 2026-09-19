import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jsve3cxaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 38.851c-8.396-8.396-8.396-22.008 0-30.405C17.193.05 30.806.05 39.203 8.446s8.396 22.009 0 30.405L24 30.15z");
}
</style><path class="jsve3cxaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:betterment"} {...others} />);
}

export default Component;
