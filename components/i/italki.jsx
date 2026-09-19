import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jdp6r-d-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.5v15a2 2 0 0 0 2 2h28l5 6v-6h2a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2");
}
</style><path class="jdp6r-d-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:italki"} {...others} />);
}

export default Component;
