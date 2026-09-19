import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a7ab900rw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.12 12.12h15.492c8.217 0 14.888 6.671 14.888 14.888V42.5H27.008c-8.217 0-14.888-6.671-14.888-14.888z");
}

.l2vhg2ifb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h18.868C34.375 5.5 42.5 13.625 42.5 23.632V42.5H23.632C13.625 42.5 5.5 34.375 5.5 24.368z");
}
</style><path class="l2vhg2ifb"/><path class="a7ab900rw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:circulus"} {...others} />);
}

export default Component;
