import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gtqrm54cf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.5 16l-4.75 16L24 16l-4.75 16l-4.75-16");
}

.i4etjbheb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.62 34.75L24 45.5L5.38 34.75v-21.5L24 2.5l18.62 10.75z");
}
</style><path class="i4etjbheb"/><path class="gtqrm54cf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wallcraft"} {...others} />);
}

export default Component;
