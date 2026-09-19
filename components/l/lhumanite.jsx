import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cg4a_1_0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.722 38.296a2.78 2.78 0 0 0 2.778 2.778h-16a2.78 2.78 0 0 0 2.778-2.778V9.704A2.78 2.78 0 0 0 5.5 6.926h16a2.78 2.78 0 0 0-2.778 2.778zm21 0a2.78 2.78 0 0 0 2.778 2.778h-16a2.78 2.78 0 0 0 2.778-2.778V9.704A2.78 2.78 0 0 0 26.5 6.926h16a2.78 2.78 0 0 0-2.778 2.778zM18.722 24h10.556");
}
</style><path class="cg4a_1_0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lhumanite"} {...others} />);
}

export default Component;
