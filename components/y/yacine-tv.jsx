import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xpz4j7pxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.868 23.799l-4.353 12.76l-4.353-12.76m-6.677 12.76v-12.76m-4.353 0h8.706M15.469 4.5l9.702 10.44m-6.023 0l10.057.001l5.274-5.537M8.66 16.857h30.68c1.19 0 2.147.958 2.147 2.147v22.35a2.14 2.14 0 0 1-2.136 2.146H8.66a2.14 2.14 0 0 1-2.147-2.137v-22.36c0-1.188.957-2.146 2.147-2.146");
}
</style><path class="xpz4j7pxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yacine-tv"} {...others} />);
}

export default Component;
