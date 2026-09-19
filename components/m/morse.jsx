import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xlu1wccsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10 34.57A5.56 5.56 0 1 1 15.6 29a5.55 5.55 0 0 1-5.6 5.57m33.39-12.32H21.07v-8.84h22.42Z");
}
</style><path class="xlu1wccsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:morse"} {...others} />);
}

export default Component;
