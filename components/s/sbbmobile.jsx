import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rb-vgcpoj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.76 14.25L43.5 24l-9.75 9.75m-19.51 0L4.5 24l9.75-9.75M4.5 24h39M24 14.25v19.5");
}
</style><path class="rb-vgcpoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sbbmobile"} {...others} />);
}

export default Component;
