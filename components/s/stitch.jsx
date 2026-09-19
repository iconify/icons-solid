import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ptu9gabgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.331 8.395l-17.05.039l-.072 17.04m-2.64 3.85L5.593 42.5l12.986-.01M39.95 22.55l.005 17.24l-17.367.003M29.065 5.5h13.272l.094 13.238");
}
</style><path class="ptu9gabgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stitch"} {...others} />);
}

export default Component;
