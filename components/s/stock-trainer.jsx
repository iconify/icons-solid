import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y61iscbtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.39 5.007l18.753 30.176M25.904 4.598L9.725 36.26M6.244 17.154l20.498 25.764m15.014-15.453l-5.877 10.18M32.68 8.51L14.924 39.263M24 3.5l17.756 10.25v20.5L24.001 44.5L6.245 34.25v-20.5z");
}
</style><path class="y61iscbtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stock-trainer"} {...others} />);
}

export default Component;
