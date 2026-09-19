import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nh9xtyiul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.45 20a7.59 7.59 0 0 0-12.9 0a7.64 7.64 0 0 1 0 8a7.59 7.59 0 0 0 12.9 0a7.64 7.64 0 0 1 0-8m6.46-3.59A7.6 7.6 0 0 0 30.45 20a7.59 7.59 0 0 1 0 8a7.59 7.59 0 1 0 6.46-11.59");
}

.y-4p36bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.55 20a7.59 7.59 0 1 0 0 8a7.59 7.59 0 0 1 0-8");
}
</style><path class="y-4p36bav"/><path class="nh9xtyiul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:letterboxd"} {...others} />);
}

export default Component;
