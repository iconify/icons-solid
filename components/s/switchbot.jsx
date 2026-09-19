import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hls4jpboy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.284 42.239s21.614 4.755 24.482-4.201c3.492-10.903-19.298-17.185-15.769-28.075c2.762-8.518 22.72-4.53 22.72-4.53");
}
</style><path class="hls4jpboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:switchbot"} {...others} />);
}

export default Component;
