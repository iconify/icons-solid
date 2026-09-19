import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l4noq89fi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5C24 33.626 14.374 24 2.5 24h0C2.5 12.126 12.126 2.5 24 2.5S45.5 12.126 45.5 24C33.626 24 24 33.626 24 45.5");
}
</style><path class="l4noq89fi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tokyo"} {...others} />);
}

export default Component;
