import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a-r5_fkbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.557 42.5L15.724 28.666H6.39v-9.332h9.333L29.557 5.5Zm3.85-8.591a10.086 10.086 0 0 0 0-19.818z");
}
</style><path class="a-r5_fkbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:soundtoggle"} {...others} />);
}

export default Component;
