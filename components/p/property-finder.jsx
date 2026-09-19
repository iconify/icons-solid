import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.z2-gtrb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30.5c0-7.18-5.82-13-13-13c0-7.18 5.82-13 13-13s13 5.82 13 13s-5.82 13-13 13H11v13c7.18 0 13-5.82 13-13");
}
</style><path class="z2-gtrb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:property-finder"} {...others} />);
}

export default Component;
