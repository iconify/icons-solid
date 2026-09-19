import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.od2s6xblp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.321 24V14L24 4L6.679 14v20L24 44m-2.885-12.5v-15m5.77 15v-15M16.5 21.115h15m-15 5.77h15");
}
</style><path class="od2s6xblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hex"} {...others} />);
}

export default Component;
