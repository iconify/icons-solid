import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a_1wniu1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13 24h11v11H13z");
}

.snqmvj41f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24h-37C5.5 13.783 13.783 5.5 24 5.5h18.5zc0 10.217-8.283 18.5-18.5 18.5v-37");
}
</style><path class="snqmvj41f"/><path class="a_1wniu1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shapez"} {...others} />);
}

export default Component;
