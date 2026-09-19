import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.muy2bmusi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.249 23.569v17.52H13.944V23.866m0-12.892V6.91H34.25v4.063m8.251 0H30.615L24 21.072l-6.615-10.097H5.5L24 39.22z");
}
</style><path class="muy2bmusi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vibulkij"} {...others} />);
}

export default Component;
