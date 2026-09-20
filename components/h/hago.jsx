import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pmwej9odu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 13.407h9.254v5.682a14.62 14.62 0 0 0 11.898 0v-5.682h9.255V43.5h-9.255V28.859c-3.898 1-8 1-11.898 0V43.5H8.797z");
}

.x1iqkjyug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.95 13.407V4.5h9.254v8.907m-30.407 0V4.5h9.254v8.907");
}
</style><path class="pmwej9odu"/><path class="x1iqkjyug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hago"} {...others} />);
}

export default Component;
