import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gk8bz_wkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 5.5h33a2 2 0 0 1 2 2v8.33a2 2 0 0 1-2 2H30.17v9.93a2.41 2.41 0 0 1-2.41 2.41h-9.93V40.5a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-33a2 2 0 0 1 2-2");
}
</style><path class="gk8bz_wkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flipboard"} {...others} />);
}

export default Component;
