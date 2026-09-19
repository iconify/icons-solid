import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kf-0-xrog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.8 30.5c7.18 0 13 5.82 13 13c-7.18 0-13-5.82-13-13m13-26v26c-7.18 0-13-5.82-13-13v-13zm2.4 13a13 13 0 0 1 13 13a13 13 0 0 1-13 13z");
}
</style><path class="kf-0-xrog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bluevine"} {...others} />);
}

export default Component;
