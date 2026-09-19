import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.myh69jvxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.917V14.75A9.25 9.25 0 1 1 33.25 24h-18.5A9.25 9.25 0 1 0 24 33.25v-6.167");
}
</style><path class="myh69jvxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:8tracks"} {...others} />);
}

export default Component;
