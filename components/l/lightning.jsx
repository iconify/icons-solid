import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.la10p2b6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.89 19.052H26.155V5.986a.5.5 0 0 0-.898-.302L9.118 26.95c-.622.82-.037 1.997.992 1.997h11.735v13.066a.5.5 0 0 0 .898.302L38.882 21.05c.622-.82.037-1.997-.992-1.997Z");
}
</style><path class="la10p2b6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lightning"} {...others} />);
}

export default Component;
