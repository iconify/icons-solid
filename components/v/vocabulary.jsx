import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f94qlxs-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.811 6.922H42.5m-2.844 0L28.278 41.078h-8.545L7.64 6.922m9.249 0L28.233 40.72M5.5 6.922h14.233");
}
</style><path class="f94qlxs-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vocabulary"} {...others} />);
}

export default Component;
